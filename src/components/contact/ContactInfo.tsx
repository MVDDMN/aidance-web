import {

    Mail,

    Phone,

    MapPin,

    Clock,

} from "lucide-react";

import { motion } from "framer-motion";

import { siteConfig } from "../../config/site";

export default function ContactInfo() {

    return (

        <div className="contact-info">

            <h3>

                Let's Talk

            </h3>

            <p className="contact-description">

                We'd love to hear about your project.
                Send us a message and we'll respond within one business day.

            </p>

            <motion.div
                whileHover={{ x: 8 }}
                className="contact-item"
            >

                <div className="contact-icon">

                    <Mail size={22} />

                </div>

                <div>

                    <h4>Email</h4>

                    <p>{siteConfig.contact.email}</p>

                </div>

            </motion.div>

            <motion.div
                whileHover={{ x: 8 }}
                className="contact-item"
            >

                <div className="contact-icon">

                    <Phone size={22} />

                </div>

                <div>

                    <h4>Phone</h4>

                    <p>{siteConfig.contact.phone}</p>

                </div>

            </motion.div>

            <motion.div
                whileHover={{ x: 8 }}
                className="contact-item"
            >

                <div className="contact-icon">

                    <MapPin size={22} />

                </div>

                <div>

                    <h4>Location</h4>

                    <p>{siteConfig.contact.location}</p>

                </div>

            </motion.div>

            <motion.div
                whileHover={{ x: 8 }}
                className="contact-item"
            >

                <div className="contact-icon">

                    <Clock size={22} />

                </div>

                <div>

                    <h4>Response Time</h4>

                    <p>Within 24 Hours</p>

                </div>

            </motion.div>

        </div>

    );

}