import "./skill-button.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components"

const MainButton = styled.div`
    background: ${props => props.isHovered? "linear-gradient(45deg, #FFFFFF 0%," +  props.color + " 30%, #000000 100%)" : props.theme.backgroundMainColor};
    color: ${props => props.isHovered? "#FFFFFF" : props.color};
    border: 3px solid ${props => props.theme.textColor};
    width: ${props => props.size};
    height: ${props => props.size};
    transition: all 1s ease;
`

function SkillButton(props) {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div>
            <MainButton
                color={props.color}
                size={props.size}
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="main-button">
                <p>{props.text}</p>
                <div className="logo">{props.logo}</div>
            </MainButton>
        </motion.div>
    )
}

export default SkillButton;