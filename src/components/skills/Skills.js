import "./skills.scss";
import SkillButton from "./SkillButton";
import { SecondaryTheme, H2Line } from "../ThemeWrappers";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava } from "react-icons/fa";

function Skills(props) {
    return (
        <SecondaryTheme>
            <div className="skills-scroll-wrapper">
                <div id="skills-scroll">
                    <div className="skills">
                        <div className="skills-title" >
                            <h2>Skills</h2>
                            <H2Line />
                        </div>
                        <p>Front-End</p>
                        <div className="front-end">
                            <SkillButton color={"#57B6EC"} width={"150px"} text={"React"} logo={<FaReact />} theme={props.theme} />
                            <SkillButton color={"#E34c26"} width={"150px"} text={"Html5"} logo={<FaHtml5 />} theme={props.theme} />
                            <SkillButton color={"#2965F1"} width={"150px"} text={"Css3"} logo={<FaCss3Alt />} theme={props.theme} />
                            <SkillButton color={"#EBCE14"} width={"150px"} text={"Js"} logo={<FaJs />} theme={props.theme} />
                            <SkillButton color={"#5382A1"} width={"150px"} text={"Java"} logo={<FaJava />} theme={props.theme} />
                        </div>
                        <p>Back-End</p>
                        <p>Other Tools</p>
                    </div>
                </div>
            </div>
        </SecondaryTheme>
    )
}

export default Skills;