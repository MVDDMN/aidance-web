import type { Portfolio } from "../types/Portfolio";

import construction from "../assets/portfolio/construction.webp";
import restaurant from "../assets/portfolio/restaurant.webp";
import lawFirm from "../assets/portfolio/law-firm.webp";

export const portfolio: Portfolio[] = [
    {
        title: "Construction Company",
        category: "Website Redesign",
        description:
            "Modern business website designed to generate qualified leads.",
        technologies: [
            "Squarespace",
            "SEO",
            "Responsive",
        ],
        image: construction,
        url: "#",
    },
    {
        title: "Restaurant Website",
        category: "Website Design",
        description:
            "Responsive restaurant website with an engaging digital menu experience.",
        technologies: [
            "React",
            "TypeScript",
            "UI/UX",
        ],
        image: restaurant,
        url: "#",
    },
    {
        title: "Law Firm",
        category: "Corporate Website",
        description:
            "Professional redesign focused on credibility and client acquisition.",
        technologies: [
            "Branding",
            "SEO",
        ],
        image: lawFirm,
        url: "#",
    },
];