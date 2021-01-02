import "./about.scss";
import { MainTheme } from "./themeWrappers";

function About() {
    return(
        <MainTheme>
            <h2>About Me</h2>
            <hr/>
            <p>Hello! I'm an aspiring web developer, currently studying Computer Science at the <span>University of Waterloo.</span> I'm adaptable, inquisitive, and laser-focused. You can keep scrolling to check out some of my projects I've been working on. Or you can reach me at any of the contacts found on <span>the sidebar!</span></p>
        </MainTheme>
    )
}

export default About;