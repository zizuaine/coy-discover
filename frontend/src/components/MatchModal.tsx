import type { Profile } from "./ProfileCard";

interface MatchModalProps {
    matchedProfile: Profile | null;
    currentUserPhotoUrl?: string;
    onClose: () => void;
    onViewMatches: () => void;
}

export const MatchModal = ({
    matchedProfile,
    currentUserPhotoUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    onClose,
    onViewMatches,
}: MatchModalProps) => {
    if (!matchedProfile) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs"
            onClick={onClose}
        >
            <div
                className="w-full max-w-sm overflow-hidden rounded-3xl border-2 border-black bg-[#FF2E7E] shadow-[4px_4px_0px_#000]"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex items-center gap-3.5 px-6 py-5 text-white">
                    <img
                        src={matchedProfile.photoUrl}
                        alt={matchedProfile.name}
                        className="h-14 w-14 rounded-full border-2 border-black object-cover"
                    />
                    <div>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-xl font-bold tracking-tight">
                                {matchedProfile.name}
                            </h3>
                            <span className="text-lg font-medium text-white/80">
                                {matchedProfile.age}
                            </span>
                        </div>
                        <p className="text-sm text-white/90">{matchedProfile.location}</p>
                    </div>
                </div>


                <div className="rounded-t-3xl border-t-2 border-black bg-white px-6 pt-8 pb-7 text-center">
                    {/* Two Tilted Portrait Cards (White Border Only) */}
                    <div className="mb-6 flex items-center justify-center">
                        <img
                            src={currentUserPhotoUrl}
                            alt="You"
                            className="h-28 w-24 -rotate-6 rounded-2xl border-4 border-white object-cover shadow-md"
                        />
                        <img
                            src={matchedProfile.photoUrl}
                            alt={matchedProfile.name}
                            className="-ml-3 h-28 w-24 rotate-6 rounded-2xl border-4 border-white object-cover shadow-md"
                        />
                    </div>


                    <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
                        It&apos;s a match!
                    </h2>
                    <p className="mt-1.5 text-sm text-neutral-600">
                        You and {matchedProfile.name} liked each other.
                    </p>


                    <button
                        type="button"
                        onClick={onClose}
                        className="mt-7 w-full cursor-pointer rounded-full border-2 border-black bg-[#FF2E7E] py-3.5 text-base font-bold text-white shadow-[3px_3px_0px_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        Keep discovering
                    </button>


                    <button
                        type="button"
                        onClick={() => {
                            onClose();
                            onViewMatches();
                        }}
                        className="mt-4 cursor-pointer text-sm font-medium text-neutral-700 hover:text-black"
                    >
                        View matches
                    </button>
                </div>
            </div>
        </div>
    );
};