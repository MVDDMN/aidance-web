import type { Service } from "../types/Services";

import {
    Monitor,
    Search,
    Megaphone,
    Gauge,
} from "lucide-react";

export const services: Service[] = [
    {
        title: "Website Design",
        description: "Modern responsive websites that convert visitors into customers.",
        icon: Monitor,
    },
    {
        title: "SEO Optimization",
        description: "Improve your search rankings and increase visibility.",
        icon: Search,
    },
    {
        title: "Digital Marketing",
        description: "Reach more customers with targeted online campaigns.",
        icon: Megaphone,
    },
    {
        title: "Performance Optimization",
        description: "Fast-loading websites optimized for conversions.",
        icon: Gauge,
    },
];