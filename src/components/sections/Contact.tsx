import Heading from "../common/Heading";
import Section from "../common/Section";

import ContactInfo from "../contact/ContactInfo";
import ContactForm from "../contact/ContactForm";

export default function Contact() {
    return (
        <Section id="contact">

            <Heading
                center
                title="Let's Build Something Great"
                subtitle="Tell us about your project and we'll get back to you as soon as possible."
            />

            <div className="contact-grid">

                <ContactInfo />

                <ContactForm />

            </div>

        </Section>
    );
}