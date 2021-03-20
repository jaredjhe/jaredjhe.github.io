import "./project-item.scss";
import ProjectImage from "./ProjectImage";
import styled from "styled-components";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { SecondaryTheme, H2Line } from "../ThemeWrappers";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectItemBorder = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid ${(props) => props.theme.textColor};
  border-radius: 90px;
  overflow: hidden;
`;

const projectThemeStyles = {
  width: "100%",
  height: "60%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const hrStyles = {
  width: "85%",
  margin: 0,
  position: "absolute",
  top: -2,
};

function ProjectItem(props) {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="project-item"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          scale: 0.9,
        },
        visible: {
          scale: 1,
        },
      }}
    >
      <ProjectItemBorder>
        <ProjectImage
          src={props.src}
          alt={props.alt}
          link={props.link}
          linkText={props.linkText}
        />
        <SecondaryTheme style={projectThemeStyles}>
          <H2Line style={hrStyles} />
          <div className="content">
            <div className="content-text">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
            <div className="project-icons">
              {Object.keys(props.icons).map((iconName, keyIndex) => (
                <OverlayTrigger
                  key={keyIndex}
                  overlay={<Tooltip>{iconName}</Tooltip>}
                >
                  <div className="project-icon">{props.icons[iconName]}</div>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </SecondaryTheme>
      </ProjectItemBorder>
    </motion.div>
  );
}

export default ProjectItem;
