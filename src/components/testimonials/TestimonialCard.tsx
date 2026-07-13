import { Star, ExternalLink } from "lucide-react";

interface Props {
    name: string;
    company: string;
    position: string;
    review: string;
    rating: number;

    avatar?: string;
    companyLogo?: string;
    website?: string;
}

export default function TestimonialCard({
    name,
    company,
    position,
    review,
    rating,
    avatar,
    companyLogo,
    website,
}: Props) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-stars">
                {Array.from({ length: rating }).map((_, index) => (
                    <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                    />
                ))}
            </div>

            <p className="testimonial-review">
                "{review}"
            </p>

            <div className="testimonial-footer">

                <div className="testimonial-profile">

                    {avatar && (
                        <img
                            src={avatar}
                            alt={name}
                        />
                    )}

                    <div>

                        <h4>{name}</h4>

                        <span>
                            {position}
                        </span>

                        <small>
                            {company}
                        </small>

                    </div>

                </div>

                {companyLogo && (

                    <img
                        className="company-logo"
                        src={companyLogo}
                        alt={company}
                    />

                )}

            </div>

            {website && (

                <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit Website

                    <ExternalLink size={16} />
                </a>

            )}

        </div>
    );
}