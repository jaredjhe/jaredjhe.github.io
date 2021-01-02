import "./heading.scss";
import styled from "styled-components";

const ThemeWrapper = styled.div`
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    transition: all .5s ease;
    `

function Heading(props) {
    
    const changeTheme = () => {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    return(      
        <ThemeWrapper>
            <h1>Hi, I'm <span>Jared He!</span></h1>
            <button onClick={changeTheme}>Change Color</button>
        </ThemeWrapper>
    );
}

export default Heading;