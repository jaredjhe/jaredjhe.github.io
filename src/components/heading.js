import "./heading.scss";
import { SecondaryTheme } from "./themeWrappers";
import {IoSunny, IoMoon} from "react-icons/io5";

const sunStyles = {
    height: "60%",
    width: "60%",
    color: "white"
}

const moonStyles = {
    height: "60%",
    width: "60%",
    color: "white"
}

const sunIcon = <IoSunny style={sunStyles} />
const moonIcon = <IoMoon style={moonStyles} />

function Heading(props) {

    const changeTheme = () => {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    return (
        <SecondaryTheme>
            <div className="heading">
                <h1>Hi, I'm <span>Jared He!</span></h1>
                <label className="toggle-dark-mode">
                    <input type="checkbox" className="toggle-dark-mode-input" onClick={changeTheme}></input>
                    <div className="toggle-dark-mode-fill">
                        <div className="toggle-dark-mode-icon">{props.theme === "light" ? moonIcon : sunIcon}</div>
                    </div>
                </label>
            </div>
        </SecondaryTheme>
    );
}

export default Heading;