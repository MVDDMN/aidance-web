import Card from "../common/Card";
import BrowserFrame from "../common/BrowserFrame";
import defaultProjectImage from "../../assets/portfolio/default.webp";

interface Props {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
}

export default function PortfolioCard({

    title,
    category,
    description,
    technologies,
    image,
    url

}: Props) {

    return (

        <Card>

            <BrowserFrame title={title}>

                <div className="portfolio-image">

                    <img
                        src={image || defaultProjectImage}
                        alt={title}
                        loading="lazy"
                        onError={(e) => {

                            const target =
                                e.currentTarget;

                            if (
                                target.src !== defaultProjectImage
                            ) {

                                target.src =
                                    defaultProjectImage;

                            }

                        }}
                    />

                </div>

            </BrowserFrame>

            <div className="portfolio-content">

                <span>{category}</span>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="tech-stack">

                    {

                        technologies.map((tech) => (

                            <span key={tech}>

                                {tech}

                            </span>

                        ))

                    }

                </div>

                <a href={url}>

                    View Project →

                </a>

            </div>

        </Card>

    );

}