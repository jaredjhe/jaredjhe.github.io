import "./heading.scss";
import { SecondaryTheme } from "./themeWrappers";

function Heading(props) {
    
    const changeTheme = () => {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    return(      
        <SecondaryTheme>
            <div class="heading">
                <h1>Hi, I'm <span>Jared He!</span></h1>
                <button onClick={changeTheme}>Change Color</button>
            </div>
        </SecondaryTheme>
    );
}

export default Heading;