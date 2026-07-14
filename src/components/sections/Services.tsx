import Heading from "../common/Heading";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { staggerContainer } from "../../animations";
import { AnimatedCard, AnimatedSection } from "../motion";

import { services } from "../../data/services";

import ServiceCard from "../services/ServiceCard";

export default function Services() {

    return (


        <AnimatedSection >
            <Section id="services">

                <Heading

                    center

                    title="What We Do"

                    subtitle="Professional digital solutions that help businesses grow online."

                />

                <motion.div
                    className="services-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {

                        services.map((service) => (

                            <AnimatedCard key={service.title}>
                                <ServiceCard {...service} />
                            </AnimatedCard>

                        ))

                    }

                </motion.div>

            </Section>
        </AnimatedSection>

    );

}