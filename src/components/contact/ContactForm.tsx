import type { ChangeEvent, FormEvent } from "react";

import { useContactForm } from "../../hooks/useContactForm";

import { validateContactForm } from "../../utils/validator";

import { sendContactEmail } from "../../services/email";

export default function ContactForm() {

    const {

        form,

        setForm,

        loading,

        setLoading,

        success,

        setSuccess,

        error,

        setError,

    } = useContactForm();

    function handleChange(

        e: ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >

    ) {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    }

    async function handleSubmit(
        e: FormEvent
    ) {

        e.preventDefault();

        setError("");

        const validation =
            validateContactForm(form);

        if (validation) {

            setError(validation);

            return;

        }

        try {

            setLoading(true);

            await sendContactEmail(form);

            setSuccess(true);

            setForm({

                name: "",

                email: "",

                company: "",

                service: "",

                message: "",

            });

            setTimeout(() => {

                setSuccess(false);

            }, 4000);

        }

        catch {

            setError(
                "Something went wrong. Please try again."
            );

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <form
            className="contact-form"
            onSubmit={handleSubmit}
        >

            <div className="input-group">

                <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                />

            </div>

            <input
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
            />

            <select
                name="service"
                value={form.service}
                onChange={handleChange}
            >

                <option value="">
                    Select Service
                </option>

                <option>
                    Website Design
                </option>

                <option>
                    Website Redesign
                </option>

                <option>
                    Landing Page
                </option>

                <option>
                    SEO Optimization
                </option>

                <option>
                    Website Maintenance
                </option>

            </select>

            <textarea

                name="message"

                rows={7}

                placeholder="Tell us about your business..."

                value={form.message}

                onChange={handleChange}

            />

            {error && (

                <p className="form-error">

                    {error}

                </p>

            )}

            {success && (

                <p className="form-success">

                    Message sent successfully!

                </p>

            )}

            <button

                className="btn btn-primary"

                disabled={loading}

            >

                {loading
                    ? "Sending..."
                    : "Start Your Project"}

            </button>

        </form>

    );

}