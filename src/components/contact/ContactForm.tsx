import type { ChangeEvent, FormEvent } from "react";

import { useContactForm } from "../../hooks/useContactForm";

import { validateContactForm } from "../../utils/validator";

import { sendContactEmail } from "../../services/email";

import type { EmailJSError } from "../../services/email";

import { AnimatePresence, motion } from "framer-motion";

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
        e: FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        setError("");

        // Honeypot check
        if ((form.website ?? "").trim()) {

            console.warn("Spam submission blocked.");

            return;

        }

        // Validation
        const validation = validateContactForm(form);

        if (validation) {

            setError(validation);

            setTimeout(() => {

                setError("");

            }, 4000);

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

                website: ""

            });

            setTimeout(() => {

                setSuccess(false);

            }, 4000);

        }

        catch (err: unknown) {

            const emailError = err as EmailJSError;

            console.error(emailError.status);

            console.error(emailError.text);

            setError(
                "We couldn't send your message. Please try again or email us directly."
            );

            setTimeout(() => {

                setError("");

            }, 4000);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            layout
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

            <AnimatePresence mode="wait">

                {error && (

                    <motion.div
                        key="error"
                        className="form-message form-error"
                        initial={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                        }}
                        transition={{
                            duration: .35,
                            ease: "easeOut",
                        }}
                    >

                        {error}

                    </motion.div>

                )}

                {!error && success && (

                    <motion.div
                        key="success"
                        className="form-message form-success"
                        initial={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                        }}
                        transition={{
                            duration: .35,
                            ease: "easeOut",
                        }}
                    >

                        ✓ Message sent successfully!

                    </motion.div>

                )}

            </AnimatePresence>

            <button
                className="btn btn-primary"
                disabled={loading}
            >

                {loading && <span className="button-spinner" />}

                {loading
                    ? "Sending..."
                    : "Start Your Project"}

            </button>

            <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                autoComplete="off"
                className="visually-hidden"
                tabIndex={-1}
            />

        </motion.form>

    );

}