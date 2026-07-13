import Button from "../common/Button";
import { navigation } from "../../config/navigation";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">

                    <h3>Aidance</h3>

                    <p>
                        Modern websites built for ambitious businesses.
                    </p>

                </div>

                <div>

                    <h4>Navigation</h4>

                    <ul className="footer-links">

                        {navigation.map((item) => (
                            <li key={item.href}>
                                <a href={item.href}>
                                    {item.label}
                                </a>
                            </li>
                        ))}

                    </ul>

                </div>

                <div>

                    <h4>Ready to Grow?</h4>

                    <p>
                        Let's build a website that generates results.
                    </p>

                    <Button>
                        Get Started
                    </Button>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 Aidance Agency. All Rights Reserved.

            </div>
        </footer>
    );
}