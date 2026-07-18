import { motion } from "framer-motion";

import Heading from "../common/Heading";
import Section from "../common/Section";

import ProcessStep from "../process/ProcessStep";

import { process } from "../../data/process";

import {
    AnimatedSection,
    AnimatedCard,
} from "../motion";

import {
    staggerContainer,
} from "../../animations";

export default function Process() {

    return (

        <Section id="process">

            <AnimatedSection>

                <Heading
                    center
                    title="Our Process"
                    subtitle="A streamlined workflow designed to deliver high-quality websites from concept to launch."
                />

                <motion.div
                    className="timeline"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2,
                    }}
                >

                    <motion.div
                        className="timeline-line"
                        initial={{
                            scaleY: 0,
                        }}
                        whileInView={{
                            scaleY: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeOut",
                        }}
                    />

                    {process.map((item) => (

                        <AnimatedCard
                            key={item.step}
                        >

                            <ProcessStep
                                {...item}
                            />

                        </AnimatedCard>

                    ))}

                </motion.div>

            </AnimatedSection>

        </Section>

    );

}