import Image from "next/image";
import "./clients.css";
import Marquee from "react-fast-marquee";
import Data from "@/constants/data";

export default function Clients() {
    const clientData = Data.clients;
    
    return (
        <div className="clients-container">
            <h1>{clientData.title}</h1>
            <Marquee
                className="clients"
                pauseOnHover={true}
                pauseOnClick={true}
                gradient={true}
                gradientWidth={50}
            >
                {[...clientData.clients, ...clientData.clients].map((client, idx) => (
                    <div 
                        className="client" 
                        key={idx} 
                        style={{ 
                            padding: "0 20px",
                            width: "200px", // Fixed container width
                            height: "100px", // Fixed container height
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <div style={{ 
                            position: "relative",
                            width: "100%",
                            height: "100%"
                        }}>
                            <Image 
                                src={client.img} 
                                alt={client.alt}
                                fill
                                style={{
                                    objectFit: "contain"
                                }}
                                sizes="200px"
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}