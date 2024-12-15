import "./about.css"
import Image from "next/image";
import Image1 from '/public/images/img1.jpg';

export default function About() {
    return (<>
        <div className="about">
            <div className="about_text">
                <h1>hello from about</h1>
            </div>
            <div className="about_image">
                <Image src={Image1} width={600} height={600} loading={"lazy"} placeholder={"blur"}/>
            </div>
        </div>
    </>)
}