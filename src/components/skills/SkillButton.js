import "./skill-button.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components"

const MainButton = styled.div`
    background: ${props => props.isHovered ? "linear-gradient(45deg, #FFFFFF 0%," + props.color + " 30%, #000000 100%)" : props.theme.backgroundMainColor};
    color: ${props => props.isHovered ? "#FFFFFF" : props.color};
    border: 3px solid ${props => props.theme.textColor};
    width: 100%;
    height: 100%;
    margin: 20px 0px;
    transition: all 1s ease;
`

function SkillButton(props) {

    const [isHovered, setIsHovered] = useState(false);

    const fontSize = props.smallText ? { fontSize: "0.6em" } : { fontSize: "1em" };

    return (
        <motion.div>
            <div className="main-button">
                <MainButton
                    color={props.color}
                    size={props.size}
                    isHovered={isHovered}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="main-button-content"
                >
                    <p style={fontSize}>{props.text}</p>
                    {props.logo}
                </MainButton>
            </div>

        </motion.div>
    )
}

export default SkillButton;