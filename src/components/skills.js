import "./skills.scss";
import { SecondaryTheme, H2Line } from "./theme-wrappers";

function Skills() {
    return (
        <SecondaryTheme>
            <div className="skills">
                <div className="skills-title">
                    <h2>Skills</h2>
                    <H2Line/>
                </div> 
                <p>Lorem ipsum</p>
            </div>
        </SecondaryTheme>
    )
}

export default Skills;