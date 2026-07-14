import { motion } from "framer-motion";

interface StatCardProps {

    value: string;

    label: string;

}

export default function StatCard({

    value,

    label,

}: StatCardProps) {

    return (

        <motion.article

            className="stat-card"

            whileHover={{
                y: -8,
                scale: 1.02,
            }}

            transition={{
                duration: .3,
            }}

        >

            <h2>

                {value}

            </h2>

            <p>

                {label}

            </p>

        </motion.article>

    );

}