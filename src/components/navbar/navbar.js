'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import "./navbar.css"
import Data from "@/constants/data"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLinkClick = (link) => {
        setIsMenuOpen(false);

        // Convert the link text to match the ID format
        const targetId = link.toLowerCase().replace(/\s+/g, '-');
        console.log('Trying to scroll to:', targetId); // Debug log
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

    return (
        <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
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
                        onClick={() => handleLinkClick(link)}
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