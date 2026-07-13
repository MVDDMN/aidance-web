import type { Testimonial } from "../types/Testimonial";

import sarah from "../assets/testimonials/sarah.webp";
import michael from "../assets/testimonials/michael.webp";
import amanda from "../assets/testimonials/amanda.webp";

import constructionLogo from "../assets/testimonials/logos/construction.webp";
import restaurantLogo from "../assets/testimonials/logos/restaurant.webp";
import lawLogo from "../assets/testimonials/logos/lawfirm.webp";

export const testimonials: Testimonial[] = [
    {
        name: "Sarah Johnson",
        position: "CEO",

        company: "Construction Company",

        review:
            "Aidance completely transformed our website. We've seen a significant increase in qualified inquiries.",

        rating: 5,

        avatar: sarah,

        companyLogo: constructionLogo,

        website: "https://construction.com",
    },

    {
        name: "Michael Reyes",

        position: "Owner",

        company: "Restaurant",

        review:
            "Professional from start to finish. The new website reflects our brand perfectly.",

        rating: 5,

        avatar: michael,

        companyLogo: restaurantLogo,
    },

    {
        name: "Amanda Cruz",

        position: "Managing Partner",

        company: "Law Firm",

        review:
            "Our inquiries doubled after the redesign. The process was incredibly smooth.",

        rating: 5,

        avatar: amanda,

        companyLogo: lawLogo,
    },
];