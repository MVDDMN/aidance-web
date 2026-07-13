import Section from "../common/Section";
import Button from "../common/Button";

export default function Hero() {
    return (
        <Section id="home">
            <div className="hero">
                <div className="hero-content">
                    <span className="hero-badge">
                        Digital Marketing • Web Design • Growth
                    </span>

                    <h1>
                        Helping Businesses Grow
                        <span className="gradient-text"> With Modern Websites</span>
                    </h1>

                    <p>
                        We create responsive, high-converting websites that strengthen
                        your brand, improve your online presence, and turn visitors into
                        loyal customers.
                    </p>

                    <div className="hero-actions">
                        <Button>Get Started</Button>

                        <Button variant="secondary">
                            View Portfolio
                        </Button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="browser-window">
                        <div className="browser-top">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="browser-body">
                            <div className="website-preview"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}