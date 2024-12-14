"use client"
import "./imageSlider.css"
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const VerticalSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (<>
            <div className="overlay"></div>
        <div className="vertical-slider">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        // placeholder="blur"
                    />
                </div>
            ))}
        </div>
    </>
    );
};

export default VerticalSlider;