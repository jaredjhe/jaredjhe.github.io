import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import "./project-image.scss";

import { CgExternal } from "react-icons/cg";

function ProjectImage(props) {
  const [opacity, setOpacity] = useState({ filter: "none" });
  const [displayStyle, setDisplayStyle] = useState({ display: "none" });
  const buttonControls = useAnimation();

  const handleMouseOver = (e) => {
    setOpacity({ filter: "grayscale(50%) blur(4px)" });
    setDisplayStyle({ display: "flex" });
    buttonControls.start("visible");
  };

  const handleMouseOut = () => {
    setOpacity({ filter: "none" });
    setDisplayStyle({ display: "none" });
    buttonControls.start("hidden");
  };

  return (
    <div
      className="project-image"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
