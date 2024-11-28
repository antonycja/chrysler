
import Image from "next/image"
import "./navbar.css"
import Data from "@/constants/data"

export default function Navbar() {
    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <Image src={Data.navbar.logo} alt="navigation logo" />
            </div>
            <ul className="nav-links">
                {Data.navbar.links.map((link, index) => (
                    <li className="link" key={index}>{link}</li>
                ))}
            </ul>

            <div className="nav-btn btn">{Data.navbar.navBtn}</div>
        </nav>
    )
}