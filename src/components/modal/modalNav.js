import "./modalNav.css"
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

export default function ModalNav({ data, setState }) {
    return (
        <div className="modal-top">
            <div className="service-info">
                <div className="service-icon">
                    <Image
                        src={data.icon}
                        alt={`${data.serviceName} icon`}
                        width={40}  // adjust these values as needed
                        height={40} // adjust these values as needed
                    />
                </div>
                <h1 className="service-name">{data.serviceName}</h1>
            </div>
            <div className="icons-side">
                <div className="modal-btn tooltip" onClick={() => setState(false)}>
                    <div className="modal-link modal-close">
                        <IoClose size={28} />
                    </div>
                    <span className="tooltiptext">close modal</span>
                </div>
            </div>
        </div>
    );
}