import Heading from "../common/Heading";
import Section from "../common/Section";

import { testimonials } from "../../data/testimonials";

import TestimonialCard from "../testimonials/TestimonialCard";

export default function Testimonials() {
    return (
        <Section id="testimonials">
            <Heading
                center
                title="What Our Clients Say"
                subtitle="Businesses trust Aidance to deliver websites that make a measurable impact."
            />

            <div className="testimonial-grid">
                {testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.name}
                        {...testimonial}
                    />
                ))}
            </div>
        </Section>
    );
}