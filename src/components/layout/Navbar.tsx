import { useEffect, useState } from "react";

import { siteConfig } from "../../config";
import { navigation } from "../../config/navigation";

import Hamburger from "../navigation/Hamburger";
import MobileMenu from "../navigation/MobileMenu";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    {/* Logo */}

                    <a
                        href="#home"
                        className="logo"
                        onClick={() => setMenuOpen(false)}
                    >
                        {siteConfig.company.name}
                    </a>

                    {/* Desktop Navigation */}

                    <nav className="nav-links">
                        {navigation.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    

                    {/* Mobile Hamburger */}

                    <Hamburger
                        open={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    />
                </div>
            </header>

            {/* Mobile Drawer */}

            <MobileMenu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}