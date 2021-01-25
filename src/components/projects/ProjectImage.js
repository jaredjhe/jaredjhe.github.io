import "./project-image.scss";
import { useState } from "react";
import { motion } from "framer-motion"
import { CgExternal } from "react-icons/cg";

function ProjectImage(props) {

    const [isHovered, setIsHovered] = useState(false);

    const opacity = isHovered ? { filter: "grayscale(50%) blur(4px)", transition: "all .5s ease" } : { transition: "all .5s ease" };

    const displayStyle = isHovered ? { display: "flex" } : { display: "none" };

    return (
        <div className="project-image" onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
            <div className="link-button-wrapper" style={displayStyle}>
                <div className="link-button">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linkText}</a>
                    <CgExternal />
                </div>
            </div>
            <img src={props.src} alt={props.alt} style={opacity}/>
        </div>
    );
}


export default ProjectImage;