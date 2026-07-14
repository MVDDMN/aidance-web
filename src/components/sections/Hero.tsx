import { motion } from "framer-motion";

import Section from "../common/Section";
import { fadeUp, staggerContainer, staggerItem, slideRight } from "../../animations";

export default function Hero() {
    return (
        <Section id="home">

            <motion.div
                className="hero"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >

                {/* LEFT */}

                <motion.div
                    className="hero-content"
                    variants={fadeUp}
                >

                    <motion.span
                        className="hero-tag"
                        variants={staggerItem}
                    >
                        DIGITAL MARKETING SOLUTIONS
                    </motion.span>

                    <motion.h1 variants={staggerItem}>
                        Modern Websites
                        <br />
                        That Grow
                        <span className="gradient-text">
                            {" "}Businesses
                        </span>
                    </motion.h1>

                    <motion.p variants={staggerItem}>
                        We craft high-performing websites that combine
                        modern design, seamless user experience,
                        and digital strategy to help businesses
                        generate more leads and build stronger brands.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        variants={staggerItem}
                    >

                        <motion.a
                            href="#contact"
                            className="btn btn-primary"
                            whileHover={{
                                y: -3,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: .97,
                            }}
                        >
                            Start Your Project
                        </motion.a>

                        <motion.a
                            href="#portfolio"
                            className="btn btn-secondary"
                            whileHover={{
                                y: -3,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: .97,
                            }}
                        >
                            View Portfolio
                        </motion.a>

                    </motion.div>

                </motion.div>

                {/* RIGHT */}

                <motion.div
                    className="hero-visual"
                    variants={slideRight}
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >

                    <div className="hero-window">

                        <div className="window-top">

                            <span />

                            <span />

                            <span />

                        </div>

                        <div className="window-content">

                            <div className="hero-chart" />

                            <div className="hero-card one" />

                            <div className="hero-card two" />

                            <div className="hero-card three" />

                        </div>

                    </div>

                </motion.div>

            </motion.div>

        </Section>
    );
}