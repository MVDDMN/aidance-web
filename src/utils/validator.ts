import type { ContactFormData } from "../types/Contact";

export function validateContactForm(
    data: ContactFormData
) {

    if (!data.name.trim())
        return "Please enter your name.";

    if (!data.email.trim())
        return "Please enter your email.";

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email))
        return "Please enter a valid email address.";

    if (!data.service)
        return "Please select a service.";

    if (!data.message.trim())
        return "Please enter your message.";

    return null;

}