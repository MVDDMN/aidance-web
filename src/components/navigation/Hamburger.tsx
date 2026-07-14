import { Menu, X } from "lucide-react";

interface HamburgerProps {
    open: boolean;
    onClick: () => void;
}

export default function Hamburger({
    open,
    onClick,
}: HamburgerProps) {
    return (
        <button
            className="hamburger"
            onClick={onClick}
            aria-label="Toggle Navigation"
        >
            {open ? <X size={28} /> : <Menu size={28} />}
        </button>
    );
}