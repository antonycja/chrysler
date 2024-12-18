import "./modal.css"
import Carousel from "../Carousel/carousel";
import ModalNav from "./modalNav";
import DetailCard from "../card/detailCard";

export default function Modal({ setState, servicesData, btnText }) {
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        setState(false);
        // Get the target element
        const element = document.getElementById(sectionId);
        if (!element) return;

        // Get the actual navbar height dynamically
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;

        // Calculate the dynamic offset based on the viewport height
        const viewportHeight = window.innerHeight;
        const dynamicOffset = Math.min(viewportHeight * 0.01, -1); // Max 20px, scales down on smaller screens

        // Calculate the target position
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight - dynamicOffset;

        // Add check for mobile devices (adjust the offset for mobile screens)
        const isMobile = window.innerWidth <= 768;
        const mobileOffset = isMobile ? 10 : 0;

        // Scroll to the target position with smooth scrolling
        window.scrollTo({
            top: offsetPosition - mobileOffset,
            behavior: 'smooth'
        });
    };

    return (
        <div className="modal-container" onClick={() => setState(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <ModalNav data={servicesData} setState={setState} />
                <div className="modal-content">
                    <Carousel images={servicesData.more.images} />
                    <div className="modal-text">
                        <div className="modal-summary-section">
                            <article className="modal-summary">
                                <p>{servicesData.more.serviceDescription}</p>
                            </article>
                        </div>

                        <div className="key-features-section">
                            <div className="key-feature-header">
                                <h1>Key features</h1>
                            </div>
                            <div className="text-block">
                                <article className="key-feature">
                                    {servicesData.more.features.map((currFeature, index) => (
                                        <DetailCard cardInfo={currFeature} id={index} key={index} />
                                    ))}
                                </article>
                            </div>
                        </div>

                    </div>
                    <div className="modal-contact btn">
                        <a onClick={(e) => handleSectionClick(e, "Contact")} className="modal-contact-btn">{btnText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}