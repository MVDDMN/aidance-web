export default function ContactForm() {

    return (

        <form className="contact-form">

            <div className="input-group">

                <input
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                />

            </div>

            <input
                type="text"
                placeholder="Company Name"
            />

            <select defaultValue="">

                <option
                    value=""
                    disabled
                >
                    Select Service
                </option>

                <option>Website Design</option>

                <option>Website Redesign</option>

                <option>Landing Page</option>

                <option>SEO Optimization</option>

                <option>Website Maintenance</option>

            </select>

            <textarea

                rows={7}

                placeholder="Tell us about your business and project..."

            />

            <button
                className="btn btn-primary"
                type="submit"
            >

                Start Your Project

            </button>

        </form>

    );

}