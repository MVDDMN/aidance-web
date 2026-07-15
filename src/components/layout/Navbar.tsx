import { useEffect, useState } from "react";

import { navigation } from "../../config/navigation";

import Hamburger from "../navigation/Hamburger";
import MobileMenu from "../navigation/MobileMenu";

import logo from "../../assets/logos/logo.png";
import logoHover from "../../assets/logos/logo2.png";

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

                    <a
                        href="#home"
                        className="logo"
                        onClick={() => setMenuOpen(false)}
                    >

                        <div className="logo-images">

                            <img
                                src={logo}
                                alt="Aidance"
                                className="logo-image logo-default"
                            />

                            <img
                                src={logoHover}
                                alt="Aidance"
                                className="logo-image logo-hover"
                            />

                        </div>

                        <div className="logo-text-wrapper">

                            <span className="logo-text">

                                AIDANCE

                            </span>

                        </div>

                    </a>

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

                    <Hamburger
                        open={menuOpen}
                        onClick={() => setMenuOpen(prev => !prev)}
                    />

                </div>

            </header>

            <MobileMenu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

        </>

    );

}