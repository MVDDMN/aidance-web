import Heading from "../common/Heading";
import Section from "../common/Section";

import { portfolio } from "../../data/portfolio";

import PortfolioCard from "../portfolio/PortfolioCard";

import { motion } from "framer-motion";
import { staggerContainer } from "../../animations";
import { AnimatedCard, AnimatedSection } from "../motion";

export default function Portfolio() {

    return (

        <AnimatedSection>
            <Section id="portfolio">

                <Heading

                    center

                    title="Featured Projects"

                    subtitle="A selection of websites we've designed to help businesses succeed online."

                />

                <motion.div
                    className="portfolio-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {

                        portfolio.map((project) => (

                            <AnimatedCard key={project.title}>
                                <PortfolioCard {...project} />
                            </AnimatedCard>
                        ))

                    }

                </motion.div>

            </Section>
        </AnimatedSection>

    );

}