import "./card.css"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go";

export default function Card({ onClick, serviceData }) {

    return <>
        <div className="project-card" onClick={onClick}>
            <div className="card-image">
                <Image src={serviceData.icon} alt={"icon"} priority/>
            </div>
            <div className="card-text">
                <h3 className="project-name">{serviceData.serviceName} </h3>
                <p className={"summary"}>{serviceData.summary}</p>
            </div>
            <div className="arrow">
                <GoArrowUpRight />
            </div>
        </div>
    </>
};
