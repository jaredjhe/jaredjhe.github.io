import "./project-item.scss";
//import styled from "styled-components";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { SecondaryTheme, H2Line } from "../ThemeWrappers";

/*const ProjectItemBackground = styled.div`
    background-color: ${props => props.theme.backgroundSecondaryColor};
    color: ${props => props.theme.textColor};
    width: 100%;
    height: 60%;
`*/

function ProjectItem(props) {

    console.log(props.theme);

    return (

        <div className="project-item">
            <img src={props.src} alt={props.alt} />

            <H2Line />
            <SecondaryTheme style={{ width: "100%", height: "60%" }}>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <div className="project-icons">{
                        Object.keys(props.icons).map((iconName, keyIndex) =>
                            <OverlayTrigger key={keyIndex} overlay={<Tooltip>{iconName}</Tooltip>}>
                                <div className="project-icon">{props.icons[iconName]}</div>
                            </OverlayTrigger>)}
                    </div>
                </div>
            </SecondaryTheme>

        </div>

    )
}

export default ProjectItem;