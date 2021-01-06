import "./skills.scss";
import { SecondaryTheme, H2Line } from "./themeWrappers";

function About() {
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

export default About;