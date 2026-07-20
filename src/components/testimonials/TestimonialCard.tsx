import { Star, ExternalLink, Quote } from "lucide-react";

import { motion } from "framer-motion";

import defaultProfileImage from "../../assets/testimonials/profile/defaultProfile.webp"; 
import defaultCompanyImage from "../../assets/testimonials/logos/defaultCompany.webp";

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

        <motion.article

            className="testimonial-card"

            whileHover={{
                y: -10,
            }}

        >

            <Quote
                className="quote-icon"
                size={42}
            />

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

                    <img
                        src={avatar || defaultProfileImage}
                        alt={name}
                        loading="lazy"
                        onError={(e) => {

                            const target =
                                e.currentTarget;

                            if (
                                target.src !== defaultProfileImage
                            ) {

                                target.src =
                                    defaultProfileImage;

                            }

                        }}
                    />

                    <div>

                        <h4>

                            {name}

                        </h4>

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
                        className="company-logo-image"
                        src={companyLogo || defaultCompanyImage}
                        alt={company}
                        loading="lazy"
                        onError={(e) => {

                            const target =
                                e.currentTarget;

                            if (
                                target.src !== defaultCompanyImage
                            ) {

                                target.src =
                                    defaultCompanyImage;

                            }

                        }}
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

        </motion.article>

    );

}