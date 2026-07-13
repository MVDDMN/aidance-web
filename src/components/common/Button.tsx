import type { ButtonHTMLAttributes } from "react";
import "../../styles/Button.css";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}

export default function Button({
    children,
    variant = "primary",
    ...props
}: ButtonProps) {
    return (
        <button
            className={`btn btn-${variant}`}
            {...props}
        >
            {children}
        </button>
    );
}