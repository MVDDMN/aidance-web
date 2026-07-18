import emailjs from "@emailjs/browser";

export interface ContactPayload {

    name: string;

    email: string;

    company: string;

    service: string;

    message: string;

}

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

const CONTACT_TEMPLATE =
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE;

const AUTO_REPLY_TEMPLATE =
    import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE;

emailjs.init(PUBLIC_KEY);

export async function sendContactEmail(
    data: ContactPayload
) {

    await emailjs.send(

        SERVICE_ID,

        CONTACT_TEMPLATE,

        {

            from_name: data.name,

            from_email: data.email,

            company: data.company,

            service: data.service,

            message: data.message,

        }

    );

    await emailjs.send(

        SERVICE_ID,

        AUTO_REPLY_TEMPLATE,

        {

            to_name: data.name,

            to_email: data.email,

            company: data.company,

        }

    );

}