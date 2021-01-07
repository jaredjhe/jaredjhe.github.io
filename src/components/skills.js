import "./skills.scss";
import SkillButton from "./skill-button";
import { SecondaryTheme, H2Line } from "./theme-wrappers";
import {FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava} from "react-icons/fa";

function Skills(props) {
    return (
        <SecondaryTheme>
            <div className="skills">
                <div className="skills-title">
                    <h2>Skills</h2>
                    <H2Line/>
                </div> 
                <SkillButton color={"#57B6EC"} size={"150px"} text={"React"} logo={<FaReact />} theme={props.theme}/>
                <SkillButton color={"#E34c26"} size={"150px"} text={"Html5"} logo={<FaHtml5 />} theme={props.theme}/>
                <SkillButton color={"#2965F1"} size={"150px"} text={"Css3"} logo={<FaCss3Alt />} theme={props.theme}/>
                <SkillButton color={"#EBCE14"} size={"150px"} text={"Js"} logo={<FaJs />} theme={props.theme}/>
                <SkillButton color={"#5382A1"} size={"150px"} text={"Java"} logo={<FaJava />} theme={props.theme}/>
            </div>
        </SecondaryTheme>
    )
}

export default Skills;