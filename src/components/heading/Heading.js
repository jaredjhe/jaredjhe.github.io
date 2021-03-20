import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "./heading.scss";

import ToggleDarkMode from "./ToggleDarkMode";
import { SecondaryTheme } from "../ThemeWrappers";

function Heading(props) {
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
    <SecondaryTheme>
      <div className="heading">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
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
          Hi, I'm{" "}
          <span
            style={
              props.theme === "light"
                ? { border: "none" }
                : {
                    textShadow: "0px 0px 5px black"
                  }
            }
          >
            Jared He!
          </span>
        </motion.h1>
        <ToggleDarkMode theme={props.theme} setTheme={props.setTheme} />
      </div>
    </SecondaryTheme>
  );
}

export default Heading;
