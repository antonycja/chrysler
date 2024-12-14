import "./hero.css"
import React from 'react';
import Image1 from '/public/images/img1.jpg';
import Image2 from '/public/images/img2.png';
import Image3 from '/public/images/img3.jpg';
import top from '/public/asserts/topLeft.png';
import bottom from '/public/asserts/bottomRight.png';
import ImageSlider from "@/components/imageSlider/imageSlider";
import Image from "next/image";

const HeroSection = () => {
    const images = [
        { src: Image1, alt: 'Image 1' },
        { src: Image2, alt: 'Image 2' },
        { src: Image3, alt: 'Image 3' },
    ];

    return (
        <section className="hero-section">
            <div className="top-left-img">
                <Image src={top} alt={"top left img"} />
            </div>
            <div className="bottom-right-img">
                <Image src={bottom} alt={"bottom right img"} />
            </div>
            <h1 className="hero-title">BEST SOFTWARE SOLUTION COMPANY</h1>
            <p className="hero-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <button className="hero-cta">Get Started</button>
            <ImageSlider images={images}/>
        </section>
    );
};

export default HeroSection;