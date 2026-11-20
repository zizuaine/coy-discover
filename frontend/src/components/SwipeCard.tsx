import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import type { PanInfo } from "framer-motion";
import type { Profile } from "./ProfileCard";
import { ProfileCard } from "./ProfileCard";

type Props = {
    profile: Profile;
    onSwipe: (direction: "LIKE" | "PASS") => void;
    disabled?: boolean;
};

const THRESHOLD = 110;
const FLY = 560;

const variants = {
    exit: (direction: "LIKE" | "PASS") => ({
        x: direction === "LIKE" ? FLY : -FLY,
        opacity: 0,
        transition: {
            duration: 0.32,
        },
    }),
};

export const SwipeCard = ({ profile, onSwipe, disabled = false }: Props) => {
    const x = useMotionValue(0);

    const rotate = useTransform(x, [-220, 220], [-14, 14]);

    // Smoothly fade in the blur + pop the icon scale as you drag toward THRESHOLD
    const likeOpacity = useTransform(x, [24, 110], [0, 1]);
    const likeScale = useTransform(x, [24, 110], [0.5, 1]);

    const passOpacity = useTransform(x, [-110, -24], [1, 0]);
    const passScale = useTransform(x, [-110, -24], [1, 0.5]);

    const onDragEnd = (_: unknown, info: PanInfo) => {
        const pushed = info.offset.x + info.velocity.x * 0.2;
        if (pushed > THRESHOLD) onSwipe("LIKE");
        else if (pushed < -THRESHOLD) onSwipe("PASS");
        else
            animate(x, 0, {
                type: "spring",
                stiffness: 500,
                damping: 32,
            });
    };

    return (
        <motion.div
            className="relative w-full max-w-[360px] touch-pan-y overflow-hidden rounded-3xl"
            style={{ x, rotate }}
            drag={disabled ? false : "x"}
            dragElastic={0.9}
            dragMomentum={false}
            onDragEnd={onDragEnd}
            variants={variants}
            exit="exit"
        >
            {/* LIKE Blur + Heart Overlay */}
            <motion.div
                style={{ opacity: likeOpacity }}
                className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-md"
            >
                <motion.div
                    style={{ scale: likeScale }}
                    className="flex h-28 w-28 -rotate-6 items-center justify-center rounded-full border-[3px] border-black bg-[#FF2E7E] shadow-[5px_5px_0px_#000]"
                >
                    <svg
                        className="h-14 w-14 drop-shadow-[2px_2px_0px_#000]"
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            d="M16 27.5C16 27.5 4.5 19.8 4.5 11.2C4.5 7.4 7.4 4.5 11.1 4.5C13.3 4.5 15.1 5.6 16 7.2C16.9 5.6 18.7 4.5 20.9 4.5C24.6 4.5 27.5 7.4 27.5 11.2C27.5 19.8 16 27.5 16 27.5Z"
                            fill="#FFFFFF"
                            stroke="#000000"
                            strokeWidth="2.8"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.5 9.2C10.2 8.2 11.3 7.8 12.4 7.9"
                            stroke="#FF2E7E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            {/* PASS Blur + Cross Overlay */}
            <motion.div
                style={{ opacity: passOpacity }}
                className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-md"
            >
                <motion.div
                    style={{ scale: passScale }}
                    className="flex h-28 w-28 rotate-6 items-center justify-center rounded-full border-[3px] border-black bg-[#E8E4F8] shadow-[5px_5px_0px_#000]"
                >
                    <svg
                        className="h-14 w-14 drop-shadow-[2px_2px_0px_#000]"
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            d="M9.5 6.5L16 13L22.5 6.5C23.3 5.7 24.7 5.7 25.5 6.5C26.3 7.3 26.3 8.7 25.5 9.5L19 16L25.5 22.5C26.3 23.3 26.3 24.7 25.5 25.5C24.7 26.3 23.3 26.3 22.5 25.5L16 19L9.5 25.5C8.7 26.3 7.3 26.3 6.5 25.5C5.7 24.7 5.7 23.3 6.5 22.5L13 16L6.5 9.5C5.7 8.7 5.7 7.3 6.5 6.5C7.3 5.7 8.7 5.7 9.5 6.5Z"
                            fill="#FFFFFF"
                            stroke="#000000"
                            strokeWidth="2.8"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            <ProfileCard profile={profile} />
        </motion.div>
    );
};