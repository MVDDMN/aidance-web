import { siteConfig } from "../../config";

interface Props {
    open: boolean;
    onClose: () => void;
}

const links = [
    "Home",
    "Services",
    "Portfolio",
    "Process",
    "About",
    "Testimonials",
    "Contact",
];

export default function MobileMenu({
    open,
    onClose,
}: Props) {
    return (
        <>
            <div
                className={`mobile-overlay ${open ? "show" : ""}`}
                onClick={onClose}
            />

            <aside
                className={`mobile-menu ${open ? "open" : ""}`}
            >
                <nav>

                    {links.map((item) => (

                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={onClose}
                        >
                            {item}
                        </a>

                    ))}

                    <button className="btn">
                        {siteConfig.cta.primary}
                    </button>

                </nav>
            </aside>
        </>
    );
}