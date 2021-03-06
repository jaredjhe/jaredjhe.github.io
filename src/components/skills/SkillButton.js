import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

import "./skill-button.scss";

const MainButton = styled.div`
  background: ${(props) =>
    props.isHovered
      ? "linear-gradient(45deg, #FFFFFF 0%," +
        props.color +
        " 30%, #000000 100%)"
      : props.theme.backgroundMainColor};
  color: ${(props) => (props.isHovered ? "#FFFFFF" : props.color)};
  border: 3px solid ${(props) => props.theme.textColor};
  width: 100%;
  height: 100%;
  margin: 24px 0px;
  transition: all 1s ease;
`;

function SkillButton(props) {
  const [isHovered, setIsHovered] = useState(false);
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
      className="main-button"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          x: -50,
        },
        visible: {
          x: 0,
        },
      }}
    >
      <MainButton
        color={props.color}
        size={props.size}
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="main-button-content"
      >
        {props.smallText ? (
          <p className="small-text">{props.text}</p>
        ) : (
          <p className="normal-text">{props.text}</p>
        )}
        {props.logo}
      </MainButton>
    </motion.div>
  );
}

export default SkillButton;
