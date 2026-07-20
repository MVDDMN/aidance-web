import type { Testimonial } from "../types/Testimonial";

import defaultLogo from "../assets/testimonials/logos/defaultCompany.webp";


export const testimonials: Testimonial[] = [
    {
        name: "Sarah Johnson",
        position: "CEO",

        company: "Construction Company",

        review:
            "Aidance completely transformed our website. We've seen a significant increase in qualified inquiries.",

        rating: 5,

        website: "https://construction.com",

        companyLogo: defaultLogo
    },

    {
        name: "Michael Reyes",

        position: "Owner",

        company: "Restaurant",

        review:
            "Professional from start to finish. The new website reflects our brand perfectly.",

        rating: 5,


    },

    {
        name: "Amanda Cruz",

        position: "Managing Partner",

        company: "Law Firm",

        review:
            "Our inquiries doubled after the redesign. The process was incredibly smooth.",

        rating: 5,

    },
];