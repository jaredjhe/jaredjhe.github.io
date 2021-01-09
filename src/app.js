import "./app.scss";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ThemeProvider } from "styled-components";

import Sidebar from "./components/sidebar";
import Heading from "./components/heading";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects"


const lightTheme = {
    textColor: "#000000",
    backgroundMainColor: "#E7E4E1",
    backgroundSecondaryColor: "#FFFFFF"
}

const darkTheme = {
    textColor: "#FFFFFF",
    backgroundMainColor: "#000000",
    backgroundSecondaryColor: "#7A7774"
}

const themes = {
    light: lightTheme,
    dark: darkTheme
}

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeProvider theme={themes[theme]}>
            <Container style={{ paddingLeft: 0, paddingRight: 0 }} fluid>
                <Row noGutters={true}>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        <div id="home-scroll">
                            <Heading theme={theme} setTheme={setTheme} />
                            <About />
                        </div>
                        <Skills theme={theme} />
                        <Projects />
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
}

export default App;
