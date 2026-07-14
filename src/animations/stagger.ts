import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};