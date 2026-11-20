interface DiscoverTabsProps {
    activeTab: "discover" | "matches";
    onSwitch: (tab: "discover" | "matches") => void;
}

export const DiscoverTabs = ({ activeTab, onSwitch }: DiscoverTabsProps) => {
    return (
        <div className="mb-5 w-full">
            <div className="grid grid-cols-2 rounded-full border-2 border-black bg-white p-1 shadow-[3px_3px_0px_#000]">
                <button
                    type="button"
                    onClick={() => onSwitch("discover")}
                    className={`cursor-pointer rounded-full py-2 text-xs font-bold transition-colors ${activeTab === "discover"
                        ? "border-2 border-black bg-[#FF2E7E] text-neutral-900"
                        : "border-2 border-transparent text-neutral-500 hover:text-black"
                        }`}
                >
                    Discover
                </button>

                <button
                    type="button"
                    onClick={() => onSwitch("matches")}
                    className={`cursor-pointer rounded-full py-2 text-xs font-bold transition-colors ${activeTab === "matches"
                        ? "border-2 border-black bg-[#FF2E7E] text-neutral-900"
                        : "border-2 border-transparent text-neutral-500 hover:text-black"
                        }`}
                >
                    Matches
                </button>
            </div>
        </div>
    );
};