import "./card.css"
import Image from "next/image"

export default function Card({ onClick, projectData }) {

    return <>
        <div className="project-card" onClick={onClick}>
            <div className="card-image">
                <Image src={projectData.project_images[0].img} alt={projectData.project_images[0].alt} placeholder="blur" priority/>
            </div>
            <div className="card-text">
                {projectData.project_tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}

                <h3><span className="project-name">{projectData.project_name}</span> is a {projectData.project_text}</h3>
                <div className="arrow">
                    <i className="fas fa-arrow-right card-icon"></i>
                </div>
            </div>
        </div>
    </>
};
