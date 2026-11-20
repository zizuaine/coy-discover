import { useEffect, useState } from "react";
import type { Profile } from "../components/ProfileCard";
import { api } from "../api";
import { MatchModal } from "../components/MatchModal";
import { DiscoverTabs } from "../components/DiscoverTab";
import { SwipeCard } from "../components/SwipeCard"

type DiscoverProps = {
    navigateToMatches: () => void
}

export const Discover = ({ navigateToMatches }: DiscoverProps) => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(true);
    const [match, setMatch] = useState<Profile | null>(null);
    const [isSwiping, setIsSwiping] = useState(false)

    const isEmpty = profiles.length === 0 && !loading;

    const currentProfile = profiles[0];

    useEffect(() => {
        const getProfiles = async () => {
            setLoading(true);
            try {
                const res = await api.get("/feed");
                setProfiles(res.data.profiles)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        };
        getProfiles()
    }, [])

    const onSwipe = async (direction: "LIKE" | "PASS") => {
        if (!currentProfile || isSwiping) return;
        setIsSwiping(true);
        try {
            const res = await api.post("/swipe", {
                targetId: currentProfile.id,
                direction
            });
            setProfiles(prev => prev.slice(1));

            if (res.data.isMatch) {
                setMatch(res.data.matchedProfile);
            }
        } catch (error) {
            console.error("Swipe failed:", error);
        } finally {
            setIsSwiping(false);
        }
    }

    return (
        <div className="discover-page">
            <main className="discover-canvas">
                <DiscoverTabs
                    activeTab="discover"
                    onSwitch={(tab) => tab === "matches" && navigateToMatches()}
                />
                <div className="discover-content">
                    {loading && <p className="discover-status">Loading profiles...</p>}
                    {isEmpty && <p className="discover-status">You've seen everyone! Check back later.</p>}

                    {currentProfile && (
                        <>
                            <div className="swipe-card-stage">
                                <SwipeCard
                                    key={currentProfile.id}
                                    profile={currentProfile}
                                    onSwipe={onSwipe}
                                    disabled={isSwiping}
                                />
                            </div>

                            <div className="mt-6 hidden items-center justify-center gap-6 md:flex">
                                <button
                                    type="button"
                                    onClick={() => onSwipe("PASS")}
                                    className="cursor-pointer rounded-full border-2 border-black bg-white px-7 py-3 text-sm font-bold text-neutral-900 shadow-[3px_3px_0px_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                                >
                                    ✕ Pass
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onSwipe("LIKE")}
                                    className="cursor-pointer rounded-full border-2 border-black bg-[#FF2E7E] px-7 py-3 text-sm font-bold text-white shadow-[3px_3px_0px_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                                >
                                    ♥ Like
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {match && <MatchModal
                    matchedProfile={match}
                    onClose={() => setMatch(null)}
                    onViewMatches={navigateToMatches}
                />}
            </main>
        </div>
    )
}