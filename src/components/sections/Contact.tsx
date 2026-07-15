import { motion } from "framer-motion";

import Heading from "../common/Heading";
import Section from "../common/Section";

import ContactInfo from "../contact/ContactInfo";
import ContactForm from "../contact/ContactForm";

import { AnimatedSection } from "../motion";
import { fadeUp } from "../../animations";

export default function Contact() {

    return (

        <Section id="contact">

            <AnimatedSection>

                <Heading
                    center
                    title="Let's Build Something Great"
                    subtitle="Have a project in mind? Whether you're launching a new business or upgrading an existing website, we're ready to help bring your vision to life."
                />

                <div className="contact-grid">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ContactInfo />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            delay: .2
                        }}
                    >
                        <ContactForm />
                    </motion.div>

                </div>

            </AnimatedSection>

        </Section>

    );

}