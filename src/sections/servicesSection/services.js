"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card/card";
import "./services.css";
import Modal from "@/components/modal/modal";

export default function Services({ services }) {
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
        <div className="card-list">
            {services.map((service, index) => (
                <div className="card-item" key={index}>
                    {selectedServiceIndex === index && (
                        <Modal
                            setState={() => setSelectedServiceIndex(null)}
                            servicesData={service} // Pass the correct service data
                        />
                    )}
                    <Card onClick={() => togglePopover(index)} serviceData={service} />
                </div>
            ))}
        </div>
    );
}
