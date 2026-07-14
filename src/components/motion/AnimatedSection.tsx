import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp } from "../../animations";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
}

export default function AnimatedSection({
    children,
    className,
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.25,
            }}
        >
            {children}
        </motion.div>
    );
}