import "./modalNav.css"
import { IoClose } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";



export default function ModalNav({ data, setState }) {
    return (
        <div className="modal-top">
            <div className="project-info">
                <h1 className="project-name">{data.project_name}</h1>
                <p className="project-type">{data.more.project_type}</p>
            </div>
            <div className="icons-side">
                <a className="modal-btn tooltip" target="_blank" href={data.more.live.link}>
                    <div className="modal-link">
                        <HiOutlineExternalLink size={28} />
                    </div>
                    <span className="tooltiptext">{data.more.live.text}</span>
                </a>
                <a className="modal-btn tooltip" target="_blank" href={data.more.github.link}>
                    <div className="modal-link">
                        <FaGithub size={28} />
                    </div>
                    <span className="tooltiptext">{data.more.github.text}</span>
                </a>
                <div className="modal-btn tooltip" onClick={() => setState(false)}>
                    <div className="modal-link modal-close">
                        <IoClose size={28} />
                    </div>
                    <span className="tooltiptext">close modal</span>
                </div>
            </div>
        </div>
    )
};

