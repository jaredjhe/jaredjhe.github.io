import "./heading.scss";
import ToggleDarkMode from "./toggle-dark-mode";
import { SecondaryTheme } from "./theme-wrappers";

function Heading(props) {
    return (
        <SecondaryTheme>
            <div className="heading">
                <h1>Hi, I'm <span>Jared He!</span></h1>
                <ToggleDarkMode theme={props.theme} setTheme={props.setTheme} />
            </div>
        </SecondaryTheme>
    );
}

export default Heading;