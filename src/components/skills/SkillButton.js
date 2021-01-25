import "./skill-button.scss";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components"
import { useInView } from "react-intersection-observer";

const MainButton = styled.div`
    background: ${props => props.isHovered ? "linear-gradient(45deg, #FFFFFF 0%," + props.color + " 30%, #000000 100%)" : props.theme.backgroundMainColor};
    color: ${props => props.isHovered ? "#FFFFFF" : props.color};
    border: 3px solid ${props => props.theme.textColor};
    width: 100%;
    height: 100%;
    margin: 20px 0px;
    transition: all 1s ease;
`

const ButtonName = styled.p`
    font-size: ${props => props.smallText ? "0.6em" : "1em"};

    @media (max-width: 420px) {
        font-size: ${props => props.smallText ? "0.4em" : "0.8em"};
    }
`

function SkillButton(props) {

    const [isHovered, setIsHovered] = useState(false);

    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden")
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="main-button"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {
                    x: -50
                },
                visible: {
                    x: 0
                }
            }}
        >
            <MainButton
                color={props.color}
                size={props.size}
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="main-button-content"
            >
                <ButtonName smallText={props.smallText}>{props.text}</ButtonName>
                {props.logo}
            </MainButton>
        </motion.div>
    )
}

export default SkillButton;