import {
    Mail,
    Phone,
    MapPin,
    Clock,
} from "lucide-react";

import { siteConfig } from "../../config/site";

export default function ContactInfo() {
    return (
        <div className="contact-info">

            <div className="contact-item">
                <Mail size={22} />

                <div>
                    <h4>Email</h4>
                    <p>{siteConfig.contact.email}</p>
                </div>
            </div>

            <div className="contact-item">
                <Phone size={22} />

                <div>
                    <h4>Phone</h4>
                    <p>{siteConfig.contact.phone}</p>
                </div>
            </div>

            <div className="contact-item">
                <MapPin size={22} />

                <div>
                    <h4>Location</h4>
                    <p>{siteConfig.contact.location}</p>
                </div>
            </div>

            <div className="contact-item">
                <Clock size={22} />

                <div>
                    <h4>Response Time</h4>
                    <p>Usually within 24 hours</p>
                </div>
            </div>

        </div>
    );
}