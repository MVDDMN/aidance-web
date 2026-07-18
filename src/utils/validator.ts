import type { ContactFormData } from "../types/Contact";

const blockedDomains = [

    "mailinator.com",
    "10minutemail.com",
    "tempmail.com",
    "guerrillamail.com",
    "trashmail.com",
    "yopmail.com",
    "sharklasers.com",
    "test.com"

];

export function validateContactForm(
    data: ContactFormData
) {

    if (!data.name.trim())
        return "Please enter your name.";

    if (!data.email.trim())
        return "Please enter your email.";

    if (!data.company.trim())
        return "Please enter your company.";

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email))
        return "Please enter a valid email address.";

    const domain = data.email
        .split("@")[1]
        .toLowerCase();

    if (blockedDomains.includes(domain))
        return "Please enter a valid email address.";

    if (!data.service)
        return "Please select a service.";

    if (!data.message.trim())
        return "Please enter your message.";

    return null;

}