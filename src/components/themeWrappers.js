import styled from "styled-components";

export const MainTheme = styled.div`
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundMainColor};
    transition: all .5s ease;
    `

export const SecondaryTheme = styled.div`
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundSecondaryColor};
    transition: all .5s ease;
    `

export const H2Line = styled.hr`
    background-color: ${props => props.theme.textColor};
    height: 3px;
`