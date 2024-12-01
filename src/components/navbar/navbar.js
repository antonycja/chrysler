'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import "./navbar.css"
import Data from "@/constants/data"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <Image src={Data.navbar.logo} alt="navigation logo" />
            </div>



            <div
                className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                {Data.navbar.links.map((link, index) => (
                    <li
                        className="link"
                        key={index}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link}
                    </li>
                ))}

            </ul>
            <div
                className="nav-btn btn"
                onClick={() => setIsMenuOpen(false)}
            >
                {Data.navbar.navBtn}
            </div>

        </nav>
    )
}