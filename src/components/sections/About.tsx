import { motion } from "framer-motion";

import Heading from "../common/Heading";
import Section from "../common/Section";

import {
    AnimatedSection,
    AnimatedCard,
} from "../motion";

import {
    staggerContainer,
} from "../../animations";

import {
    companyInfo,
    companyStats,
} from "../../data/company";

import StatCard from "../about/StatCard";

export default function About() {
    return (
        <Section id="about">

            <AnimatedSection>

                <Heading
                    center
                    title="About Aidance"
                    subtitle="Building modern digital experiences that help businesses grow, convert, and establish a stronger online presence."
                />

                <div className="about-grid">

                    <motion.div
                        className="about-content"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: .2,
                        }}
                    >

                        {companyInfo.map((item) => (

                            <AnimatedCard key={item.title}>

                                <article className="about-block">

                                    <div className="about-accent" />

                                    <div>

                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>

                                    </div>

                                </article>

                            </AnimatedCard>

                        ))}

                    </motion.div>

                    <motion.div
                        className="stats-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                    >

                        {companyStats.map((stat) => (

                            <AnimatedCard
                                key={stat.label}
                            >

                                <StatCard
                                    {...stat}
                                />

                            </AnimatedCard>

                        ))}

                    </motion.div>

                </div>

            </AnimatedSection>

        </Section>
    );
}