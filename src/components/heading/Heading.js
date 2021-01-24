import "./heading.scss";
import ToggleDarkMode from "./ToggleDarkMode";
import { SecondaryTheme } from "../ThemeWrappers";
import { motion } from "framer-motion";

function Heading(props) {
    return (
        <SecondaryTheme>
            <div className="heading">
                <motion.h1 initial={{ y:-100 }} animate={{ y:0 }}>Hi, I'm <span>Jared He!</span></motion.h1>
                <ToggleDarkMode theme={props.theme} setTheme={props.setTheme} />
            </div>
        </SecondaryTheme>
    );
}

export default Heading;