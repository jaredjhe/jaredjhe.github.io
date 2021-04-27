import { useState } from "react";
import { motion } from "framer-motion";

import "./project-image.scss";

import { CgExternal } from "react-icons/cg";

function ProjectImage(props) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="project-image">
      <motion.div
        className="animation-wrapper"
        initial="hidden"
        whileHover="visible"
        onMouseOver={() => setIsImageHovered(true)}
        onMouseOut={() => setIsImageHovered(false)}
      >
        <motion.div
          className="link-button-wrapper"
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
          <motion.div className="link-button" whileHover={{ scale: 1.1 }}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              {props.linkText}
            </a>
            <CgExternal />
          </motion.div>
        </motion.div>
        <img
          src={props.src}
          alt={props.alt}
          style={{
            filter: isImageHovered ? "grayscale(100%) opacity(30%)" : "none",
          }}
        />
      </motion.div>
    </div>
  );
}

export default ProjectImage;
