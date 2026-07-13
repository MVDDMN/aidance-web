import type { LucideIcon } from "lucide-react";

interface ProcessStepProps {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export default function ProcessStep({
    step,
    title,
    description,
    icon: Icon,
}: ProcessStepProps) {
    return (
        <div className="process-node">
            <div className="process-circle">
                <Icon size={28} />
            </div>

            <span className="process-step-number">
                {step}
            </span>

            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    );
}