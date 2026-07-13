import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export default function Container({
    children,
}: ContainerProps) {
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                paddingInline: "1.5rem",
            }}
        >
            {children}
        </div>
    );
}