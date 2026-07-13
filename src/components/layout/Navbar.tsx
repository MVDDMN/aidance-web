import Button from "../common/Button";
import { navigation } from "../../config/navigation";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="#home"
                    className="logo"
                >
                    Aidance
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