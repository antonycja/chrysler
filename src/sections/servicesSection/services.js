"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card/card";
import "./services.css";
import Modal from "@/components/modal/modal";
import data from "@/constants/data"

export default function Services() {

    const {heading1, businessName, heading2, subheading, btnText, services} = data.services

    // Track the index of the currently open card
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

    useEffect(() => {
        if (selectedServiceIndex !== null) {
            document.body.style.overflow = "hidden";
        } else document.body.style.overflow = "scroll";
        return () => {};
    }, [selectedServiceIndex]);

    const togglePopover = (index) => {
        // Toggle the modal only for the clicked card
        setSelectedServiceIndex(index === selectedServiceIndex ? null : index);
    };

    return (
        <>
            <div className="services-hearder">
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
                            servicesData={service} // Pass the correct service data
                            btnText={btnText}
                        />
                    )}
                    <Card onClick={() => togglePopover(index)} serviceData={service} />
                </div>
            ))}
        </div>
        </>
    );
}
