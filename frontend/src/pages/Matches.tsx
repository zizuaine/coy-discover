import { useEffect, useState } from "react";
import type { Profile } from "../components/ProfileCard";
import { api } from "../api";
import { DiscoverTabs } from "../components/DiscoverTab";

type MatchesProps = {
    navigateToDiscover: () => void;
}

export const Matches = ({ navigateToDiscover }: MatchesProps) => {
    const [matches, setMatches] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            setLoading(true);
            try {
                const res = await api.get("/matches");
                setMatches(res.data.matches || []);
            } catch (error) {
                console.error("Failed to fetch matches:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    return (

        <div className="discover-page">
            <main className="discover-canvas">
                <DiscoverTabs
                    activeTab="matches"
                    onSwitch={(tab) => tab === "discover" && navigateToDiscover()}
                />
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900">
                        Your matches
                    </h1>
                    {!loading && (
                        <span className="rounded-full border-2 border-black bg-[#E8E4F8] px-3 py-1 text-xs font-bold text-neutral-900 shadow-[1.5px_1.5px_0px_#000]">
                            {matches.length} {matches.length === 1 ? "match" : "matches"}
                        </span>
                    )}
                </div>

                {loading ? (
                    <div className="py-12 text-center text-sm font-medium text-neutral-500">
                        Loading your matches...
                    </div>
                ) : matches.length === 0 ? (
                    <div className="rounded-2xl border-2 border-black bg-white p-8 text-center shadow-[4px_4px_0px_#000]">
                        <p className="text-base font-bold text-neutral-900">No matches yet</p>
                        <p className="mt-1.5 text-xs text-neutral-500">
                            Keep discovering profiles and when someone likes you back, they'll show up here!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {matches.map((match) => (
                            <div
                                key={match.id}
                                className="flex items-center gap-3.5 rounded-2xl border-2 border-black bg-white p-4 shadow-[3px_3px_0px_#000]"
                            >
                                <img
                                    src={match.photoUrl}
                                    alt={match.name}
                                    className="h-14 w-14 shrink-0 rounded-full border-2 border-black object-cover"
                                />
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="truncate font-extrabold text-neutral-900">
                                            {match.name}, {match.age}
                                        </h3>
                                        <span className="shrink-0 rounded-md border border-neutral-300 bg-neutral-50 px-1.5 py-0.5 text-[10px] font-semibold text-neutral-600">
                                            ❤️ Match
                                        </span>
                                    </div>
                                    <p className="text-xs text-neutral-500">{match.location}</p>
                                    {match.bio && (
                                        <p className="mt-1 truncate text-xs text-neutral-600">
                                            {match.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        <p className="pt-2 text-center text-xs font-medium text-neutral-500">
                            You both liked each other!
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};