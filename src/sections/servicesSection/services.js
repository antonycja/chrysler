"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card/card";
import "./services.css";
import Modal from "@/components/modal/modal";

export default function Services({ projects }) {
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
            {projects.map((project, index) => (
                <div className="card-item" key={index}>
                    {selectedServiceIndex === index && (
                        <Modal
                            setState={() => setSelectedServiceIndex(null)}
                            projectsData={project} // Pass the correct project data
                        />
                    )}
                    <Card onClick={() => togglePopover(index)} projectData={project} />
                </div>
            ))}
        </div>
    );
}
