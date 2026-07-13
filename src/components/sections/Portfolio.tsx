import Heading from "../common/Heading";
import Section from "../common/Section";

import { portfolio } from "../../data/portfolio";

import PortfolioCard from "../portfolio/PortfolioCard";

export default function Portfolio() {

    return (

        <Section id="portfolio">

            <Heading

                center

                title="Featured Projects"

                subtitle="A selection of websites we've designed to help businesses succeed online."

            />

            <div className="portfolio-grid">

                {

                    portfolio.map((project) => (

                        <PortfolioCard

                            key={project.title}

                            {...project}

                        />

                    ))

                }

            </div>

        </Section>

    );

}