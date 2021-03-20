import "./project-image.scss";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CgExternal } from "react-icons/cg";

function ProjectImage(props) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonControls = useAnimation();

  // Animation for External Link Button
  if (isHovered) {
    buttonControls.start("visible");
  } else {
    buttonControls.start("hidden");
  }

  const opacity = isHovered
    ? { filter: "grayscale(50%) blur(4px)", transition: "all .5s ease" }
    : { transition: "all .5s ease" };

  const displayStyle = isHovered ? { display: "flex" } : { display: "none" };

  return (
    <div
      className="project-image"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="link-button-wrapper" style={displayStyle}>
        <motion.div
          className="link-button"
          initial="hidden"
          animate={buttonControls}
          whileHover={{ scale: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.linkText}
          </a>
          <CgExternal />
        </motion.div>
      </div>
      <img src={props.src} alt={props.alt} style={opacity} />
    </div>
  );
}

export default ProjectImage;
