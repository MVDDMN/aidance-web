import type { LucideIcon } from "lucide-react";
import Card from "../common/Card";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export default function ServiceCard({
    title,
    description,
    icon: Icon,
}: ServiceCardProps) {
    return (
        <Card>
            <div className="service-card">
                <div className="service-icon">
                    <Icon size={34} strokeWidth={2} />
                </div>

                <h3>{title}</h3>

                <p>{description}</p>
            </div>
        </Card>
    );
}