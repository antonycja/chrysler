"use client";
import { useState, useEffect, useRef } from "react";
import Card from "@/components/card/card";
import "./services.css";
import Modal from "@/components/modal/modal";
import data from "@/constants/data"

export default function Services() {
    const {heading1, businessName, heading2, subheading, btnText, services} = data.services
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
    const scrollPositionRef = useRef(0);

    useEffect(() => {
        if (selectedServiceIndex !== null) {
            // Store the current scroll position
            scrollPositionRef.current = window.scrollY;
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${scrollPositionRef.current}px`;
        } else {
            // Restore scrolling and position
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            // Restore scroll position
            window.scrollTo(0, scrollPositionRef.current);
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        };
    }, [selectedServiceIndex]);

    const togglePopover = (index) => {
        setSelectedServiceIndex(index === selectedServiceIndex ? null : index);
    };

    return (
        <section id="services">
            <div className="services-header">
                <h1>{heading1}</h1>
                <h1><span className="business-name"> {businessName} </span> {heading2}</h1>
                <h4>{subheading}</h4>
            </div>
            <div className="card-list">
                {services.map((service, index) => (
                    <div className="card-item" key={index}>
                        {selectedServiceIndex === index && (
                            <Modal
                                setState={() => setSelectedServiceIndex(null)}
                                servicesData={service}
                                btnText={btnText}
                            />
                        )}
                        <Card onClick={() => togglePopover(index)} serviceData={service} />
                    </div>
                ))}
            </div>
        </section>
    );
}