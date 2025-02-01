"use client"
import Image from "next/image"
import "./footer.css"
import { SocialIcon } from "react-social-icons"
import Data from "@/constants/data"

export default function Footer() {
    const footer = Data.footer

    const handleLinkClick = (link) => {
        // Convert the link text to match the ID format
        const targetId = link.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
 
    return (<section id="company">
        <div className="footer-container">
            <div className="footer-box">
                <div className="logo">
                    <Image src={footer.logo} alt="logo" />
                    <p>{footer.text}</p>
                </div>

                <div className="footer-menu">
                    <h4>{footer.menuTitle}</h4>
                    <div className="footer-links">
                        {Data.navbar.links.map((link, index) => (
                            <a
                                key={index}
                                onClick={() => handleLinkClick(link)}
                                className="footer-link"
                                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} // Add href for better accessibility
                                role="button"
                                style={{ cursor: 'pointer' }} // Add cursor pointer
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="company">
                    <h4>{footer.company.title}</h4>
                    <div className="contact-details">
                        <div className="detail">
                            <p className="label">tel</p>
                            <p>{footer.company.tel}</p>
                        </div>
                        <div className="detail">
                            <p className="label">email</p>
                            <a href={`mailto:${footer.company.email}`}>{footer.company.email}</a>
                        </div>
                        <div className="detail">
                            <p className="label">address</p>
                            <p>{footer.company.address}</p>
                        </div>
                    </div>
                </div>
                <div className="connect">
                    <h4>{footer.connect.title}</h4>
                    <div className="socials">
                        {
                            footer.connect.social.map((social, index) => (
                                <div className="social" key={index}>
                                    <SocialIcon className="social-icon" url={social.link} bgColor="blue" target="_blank" />
                                    <p className="social-label">{social.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <footer>
                {footer.footerText} <span>Designed and Coded by codeAnt Devs. &#x2615;</span>
            </footer>
        </div>
    </section>)
}
