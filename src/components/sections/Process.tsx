import Heading from "../common/Heading";
import Section from "../common/Section";

import { process } from "../../data/process";

import ProcessStep from "../process/ProcessStep";

export default function Process() {
    return (
        <Section id="process">
            <Heading
                center
                title="Our Process"
                subtitle="A streamlined workflow designed to deliver high-quality websites from concept to launch."
            />

            <div className="timeline">

                <div className="timeline-line"></div>

                {process.map((item) => (
                    <ProcessStep
                        key={item.step}
                        {...item}
                    />
                ))}

            </div>
        </Section>
    );
}