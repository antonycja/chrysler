import Image from "next/image"
import "./footer.css"
import Data from "@/constants/data"

export default function Footer() {
    const footer = Data.footer
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
                            <a href={"#/" + link} className="footer-link">
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
                </div>
            </div>
            <footer>
                {footer.footerText} <span>Designed and Coded by codeAnt Devs. &#x2615;</span>
            </footer>
        </div>
    </section>)
}