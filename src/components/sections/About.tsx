import Heading from "../common/Heading";
import Section from "../common/Section";

import {
    companyInfo,
    companyStats,
} from "../../data/company";

import StatCard from "../about/StatCard";

export default function About() {
    return (
        <Section id="about">
            <Heading
                center
                title="About Aidance"
                subtitle="A passionate team creating digital experiences that help businesses grow."
            />

            <div className="about-grid">

                <div className="about-content">

                    {companyInfo.map((item) => (
                        <div
                            key={item.title}
                            className="about-block"
                        >
                            <h3>{item.title}</h3>

                            <p>{item.description}</p>
                        </div>
                    ))}

                </div>

                <div className="stats-grid">

                    {companyStats.map((stat) => (
                        <StatCard
                            key={stat.label}
                            {...stat}
                        />
                    ))}

                </div>

            </div>
        </Section>
    );
}