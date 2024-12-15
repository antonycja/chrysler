import "./about.css"
import Image from "next/image";
import Image1 from '/public/images/img1.jpg';

export default function About() {
    return (<>
        <div className="about">
            <div className="about-text">
                <div className="about-headings">
                    <h4>welcome to</h4>
                    <h1>business name here</h1>
                    <h2>business model here</h2>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est qui, consequuntur officiis iure asperiores ex ab placeat itaque architecto molestiae dolor amet, saepe quidem quis numquam provident veniam corporis. Eligendi.</p>

            </div>
            <div className="about-image">
                <Image src={Image1} alt="about image" loading={"lazy"} placeholder={"blur"} />
            </div>
        </div>
    </>)
}