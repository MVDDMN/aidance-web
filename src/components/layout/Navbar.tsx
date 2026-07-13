import Button from "../common/Button";
import { navigation } from "../../config/navigation";
import { siteConfig } from "../../config/site";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                <a className="logo">

                    {siteConfig.company.name}

                </a>

                <nav>

                    <ul className="nav-links">

                        {navigation.map((item) => (
                            <li key={item.href}>

                                <a href={item.href}>
                                    {item.label}
                                </a>

                            </li>
                        ))}

                    </ul>

                </nav>

                <Button>
                    Get Started
                </Button>

            </div>
        </header>
    );
}