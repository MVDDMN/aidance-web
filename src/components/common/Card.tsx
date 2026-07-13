import type { ReactNode } from "react";
import "../../styles/Card.css";

interface CardProps {
    children: ReactNode;
}

export default function Card({
    children
}: CardProps) {

    return (

        <div className="card">

            {children}

        </div>

    );

}