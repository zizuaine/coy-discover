import { motion, useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import type { Profile } from "./ProfileCard";
import { ProfileCard } from "./ProfileCard";
import type { PanInfo } from "framer-motion";
import { animate } from "framer-motion";

type Props = {
    profile: Profile;
    onSwipe: (direction: "LIKE" | "PASS") => void;
    disabled?: boolean
};

const THRESHOLD = 110;
const FLY = 560;

const variants = {
    exit: (direction: "LIKE" | "PASS") => ({
        x: direction === "LIKE" ? FLY : -FLY,
        opacity: 0,
        transition: {
            duration: 0.32
        }
    })
}

export const SwipeCard = ({ profile, onSwipe, disabled = false, }: Props) => {
    if (disabled) return;
    const x = useMotionValue(0);

    const rotate = useTransform(
        x,
        [-220, 220],
        [-14, 14]
    );

    const likeOpacity = useTransform(
        x,
        [24, 110],
        [0, 1]
    );

    const passOpacity = useTransform(
        x,
        [-110, -24],
        [1, 0]
    );

    const onDragEnd = (_: unknown, info: PanInfo) => {
        const pushed = info.offset.x + info.velocity.x * 0.2;
        if (pushed > THRESHOLD) onSwipe("LIKE");
        else if (pushed < -THRESHOLD) onSwipe("PASS");
        else animate(x, 0, {
            type: "spring",
            stiffness: 500,
            damping: 32
        })
    };

    return (
        <motion.div
            style={{ x, rotate }}
            drag={disabled ? false : "x"}
            dragElastic={0.9}
            dragMomentum={false}
            onDragEnd={onDragEnd}
            variants={variants}
            exit="exit"
        >
            <motion.span
                className="stamp like"
                style={{ opacity: likeOpacity }}
            >
                LIKE
            </motion.span>

            <motion.span
                className="stamp pass"
                style={{ opacity: passOpacity }}
            >
                PASS
            </motion.span>
            <ProfileCard profile={profile} />
        </motion.div>
    )
}