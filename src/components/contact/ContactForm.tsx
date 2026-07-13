export default function ContactForm() {
    return (
        <form className="contact-form">

            <input
                type="text"
                placeholder="Your Name"
            />

            <input
                type="email"
                placeholder="Email Address"
            />

            <input
                type="text"
                placeholder="Company"
            />

            <select defaultValue="">
                <option value="" disabled>
                    Select a Service
                </option>

                <option>Website Design</option>
                <option>Website Redesign</option>
                <option>SEO Optimization</option>
                <option>Website Maintenance</option>
            </select>

            <textarea
                rows={6}
                placeholder="Tell us about your project..."
            />

            <button
                type="submit"
                className="btn"
            >
                Start Your Project
            </button>

        </form>
    );
}