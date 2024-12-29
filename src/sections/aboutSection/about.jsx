import "./about.css"
import Image from "next/image";
import data from '@/constants/data';

export default function About() {
    const { welcome, businessName, businessModel, businessSummary, businessImg } = data.about;
    return (<section id="about-us">
        <div className="about">
            <div className="about-text">
                <div className="about-headings">
                    <h4>{welcome}</h4>
                    <h1>{businessName}</h1>
                    <h2>{businessModel}</h2>
                </div>
                <p>{businessSummary}</p>
            </div>
            <div className="about-image">
                <Image src={businessImg} alt="about image" loading={"lazy"} placeholder={"blur"} />
            </div>
        </div>
    </section>)
}