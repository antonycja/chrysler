import "./hero.css"
import React from 'react';
import Image from "next/image";
import ImageSlider from "@/components/imageSlider/imageSlider";
import Data from "@/constants/data";

const HeroSection = () => {
    const { title, description, ctaButton, images, decorativeImages } = Data.hero;

    return (
        <section className="hero-section">
            <div className="top-left-img">
                <Image
                    src={decorativeImages.topLeft}
                    alt="top left decorative element"
                    priority
                    sizes="(max-width: 768px) 0px, 20vw"
                />
            </div>
            <div className="bottom-right-img">
                <Image
                    src={decorativeImages.bottomRight}
                    alt="bottom right decorative element"
                    priority
                    sizes="(max-width: 768px) 0px, 20vw"
                />
            </div>

            <h1 className="hero-title">{title}</h1>

            <p className="hero-description">
                {description}
            </p>

            <button className="hero-cta">{ctaButton}</button>

            <ImageSlider images={images}/>
        </section>
    );
};

export default HeroSection;