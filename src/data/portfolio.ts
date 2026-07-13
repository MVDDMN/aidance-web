import type { Portfolio } from "../types/Portfolio";

export const portfolio: Portfolio[] = [
    {
        title: "Construction Company",
        category: "Website Redesign",
        description:
            "A modern business website focused on lead generation.",
        technologies: [
            "Squarespace",
            "SEO",
            "Responsive"
        ],
        image: "/portfolio/construction.jpg",
        url: "#",
    },

    {
        title: "Restaurant Website",
        category: "Website Design",
        description:
            "Elegant online menu and reservation experience.",
        technologies: [
            "React",
            "TypeScript",
            "UI/UX"
        ],
        image: "/portfolio/restaurant.jpg",
        url: "#",
    },

    {
        title: "Law Firm",
        category: "Corporate Website",
        description:
            "Professional redesign focused on trust and conversion.",
        technologies: [
            "Branding",
            "SEO"
        ],
        image: "/portfolio/law.jpg",
        url: "#",
    }
];