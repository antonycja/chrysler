
import "./modal.css"
import Carousel from "../Carousel/carousel";
import ModalNav from "./modalNav";
import DetailCard from "../card/detailCard";

export default function Modal({ setState, projectsData }) {
    // const images = [Images.geri, Images.fottis]
    // const images = Object.keys(Images).map(key => Images[key]);

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
                {/* Your scrollable content goes here */}
                <ModalNav data={projectsData} setState={setState} />
                <div className="modal-content">
                    <Carousel images={projectsData.project_images} />
                    <div className="modal-text">
                        <div className="modal-summary-section">
                            <div className="modal-summary-header">
                                <h1>{projectsData.more.summary.title}</h1>
                            </div>

                            <article className="modal-summary">
                                <p>{projectsData.more.summary.text}</p>
                            </article>
                        </div>

                        <div className="key-features-section">
                            <div className="key-feature-header">
                                <h1>{projectsData.more.all_features.title}</h1>
                            </div>
                            <div className="text-block">
                                <article className="key-feature">
                                    {projectsData.more.all_features.features.map((currFeature, index) => (
                                        <DetailCard cardInfo={currFeature} id={index} key={index} />
                                    ))}
                                </article>
                            </div>
                        </div>

                        <div className="technologies-section">
                            <div className="technology-header">
                                <h1>{projectsData.more.all_technologies.title}</h1>
                            </div>

                            <article className="technologies">
                                {projectsData.more.all_technologies.technologies.map((currTechnologies, index) => (
                                    <DetailCard cardInfo={currTechnologies} id={index} key={index}/>
                                ))}
                            </article>

                        </div>
                    </div>
                    <div className="modal-contact btn">
                        <a onClick={(e) => handleSectionClick(e, "Contact")} className="modal-contact-btn">Contact me</a>
                    </div>

                </div>

            </div>
        </div>
    );
}
