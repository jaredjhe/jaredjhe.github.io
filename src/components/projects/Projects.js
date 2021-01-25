import "./projects.scss";
import ProjectItem from "./ProjectItem";
import { MainTheme, H2Line } from "../ThemeWrappers";
import { Container, Row, Col } from "react-bootstrap";

import PersonalWebsiteImg from "../../assets/project-images/personal-website.png";

import { FaBootstrap, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";

function Projects(props) {
    return (
        <MainTheme>
            <div className="projects" id="projects-scroll">
                <div className="projects-title">
                    <h2>Projects</h2>
                    <H2Line />
                </div>
                <Container style={{ paddingLeft: 0, paddingRight: 0 }} fluid>
                    <Row xs={1} md={2} noGutters={true}>
                        <Col className="center-column"><ProjectItem
                            src={PersonalWebsiteImg}
                            alt={"Jared He's personal website"}
                            title={"Personal Website"}
                            description={"This is the website that you are currently browsing! Designed from scratch without a template. Animations implemented using Framer Motion, and Dark Mode Toggle implemented with help from Styled Components. Recursive!"}
                            icons={{
                                "React": <FaReact />,
                                "Sass": <FaSass />,
                                "HTML5": <FaHtml5 />,
                                "JavaScript": <FaJs />,
                                "Bootstrap": <FaBootstrap />
                            }}
                            theme={props.theme}
                        /></Col>
                        <Col className="center-column"><ProjectItem
                            src={PersonalWebsiteImg}
                            alt={"Jared He's personal website"}
                            title={"My Personal Website"}
                            description={"This is the website that you are currently browsing! Designed from scratch without a template. Animations implemented using Framer Motion, and Dark Mode Toggle implemented with help from Styled Components. Recursive!"}
                            icons={{
                                "React": <FaReact />,
                                "Sass": <FaSass />
                            }}
                            theme={props.theme}
                        /></Col>
                        <Col className="center-column"><ProjectItem
                            src={PersonalWebsiteImg}
                            alt={"Jared He's personal website"}
                            title={"My Personal Website"}
                            description={"This is the website that you are currently browsing! Designed from scratch without a template. Animations implemented using Framer Motion, and Dark Mode Toggle implemented with help from Styled Components. Recursive!"}
                            icons={{
                                "React": <FaReact />,
                                "Sass": <FaSass />
                            }}
                            theme={props.theme}
                        /></Col>
                        <Col className="center-column"><ProjectItem
                            src={PersonalWebsiteImg}
                            alt={"Jared He's personal website"}
                            title={"My Personal Website"}
                            description={"This is the website that you are currently browsing! Designed from scratch without a template. Animations implemented using Framer Motion, and Dark Mode Toggle implemented with help from Styled Components. Recursive!"}
                            icons={{
                                "React": <FaReact />,
                                "Sass": <FaSass />
                            }}
                            theme={props.theme}
                        /></Col>
                    </Row>
                </Container>
                <p id="copyright">© Jared He 2020</p>
            </div>
        </MainTheme>
    );
}

export default Projects;