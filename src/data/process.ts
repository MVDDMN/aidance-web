import type { Process } from "../types/Process";

import {
    Search,
    Lightbulb,
    PencilRuler,
    Code2,
    Rocket,
} from "lucide-react";

export const process: Process[] = [
    {
        step: "01",
        title: "Discovery",
        description:
            "We learn about your business, goals, and target audience.",
        icon: Search,
    },
    {
        step: "02",
        title: "Strategy",
        description:
            "We define the structure, user journey, and project roadmap.",
        icon: Lightbulb,
    },
    {
        step: "03",
        title: "Design",
        description:
            "Our team creates modern, responsive UI/UX tailored to your brand.",
        icon: PencilRuler,
    },
    {
        step: "04",
        title: "Development",
        description:
            "We build a fast, scalable website using modern technologies.",
        icon: Code2,
    },
    {
        step: "05",
        title: "Launch",
        description:
            "After testing, we deploy your website and ensure a smooth launch.",
        icon: Rocket,
    },
];