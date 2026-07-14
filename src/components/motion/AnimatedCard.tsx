import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { staggerItem } from "../../animations";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
}

export default function AnimatedCard({
    children,
    className,
}: AnimatedCardProps) {
    return (
        <motion.div
            variants={staggerItem}
            className={className}
        >
            {children}
        </motion.div>
    );
}