"use client"
import React, { useState } from "react";
import "./carousel.css";
import Image from "next/image"
// import VideoDialog from "../videoDialog/videoDialog";


export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? "active" : ""
                            }`}
                    >
                        {index != 0 ? <Image src={image.img} alt={image.alt} width={4000} height={4000} placeholder="blur"/> :
                            <Image src={image.img} alt={image.alt} width={4000} height={4000} placeholder="blur"/>}
                        {/* TODO: Must replace the copy of this image with a embedded playable video */}

                    </div>
                ))}
            </div>

            <button className="carousel-btn prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
                &#10095;
            </button>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
