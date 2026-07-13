import Heading from "../common/Heading";
import Section from "../common/Section";

import { services } from "../../data/services";

import ServiceCard from "../services/ServiceCard";

export default function Services() {

    return (

        <Section id="services">

            <Heading

                center

                title="What We Do"

                subtitle="Professional digital solutions that help businesses grow online."

            />

            <div className="services-grid">

                {

                    services.map((service) => (

                        <ServiceCard

                            key={service.title}

                            {...service}

                        />

                    ))

                }

            </div>

        </Section>

    );

}