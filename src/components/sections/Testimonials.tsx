import { motion } from "framer-motion";

import Heading from "../common/Heading";
import Section from "../common/Section";

import TestimonialCard from "../testimonials/TestimonialCard";

import { testimonials } from "../../data/testimonials";

import { AnimatedSection, AnimatedCard } from "../motion";
import { staggerContainer } from "../../animations";

export default function Testimonials() {

    return (

        <Section id="testimonials">

            <AnimatedSection>

                <Heading
                    center
                    title="Trusted By Growing Businesses"
                    subtitle="Our clients trust Aidance to create websites that don't just look great—they generate leads, improve credibility, and support long-term business growth."
                />

                <motion.div
                    className="testimonial-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2,
                    }}
                >

                    {testimonials.map((testimonial) => (

                        <AnimatedCard
                            key={testimonial.name}
                        >

                            <TestimonialCard
                                {...testimonial}
                            />

                        </AnimatedCard>

                    ))}

                </motion.div>

            </AnimatedSection>

        </Section>

    );

}