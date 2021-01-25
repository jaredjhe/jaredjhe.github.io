import "./projects.scss";
import ProjectItem from "./ProjectItem";
import { MainTheme, H2Line } from "../ThemeWrappers";
import { Container, Row, Col } from "react-bootstrap";

import PersonalWebsiteImg from "../../assets/project-images/personal-website.png";
import IntegriTweetImg from "../../assets/project-images/integritweet.png";
import CovEDImg from "../../assets/project-images/coved.png";
import SkatezyImg from "../../assets/project-images/skatezy.png";

import { FaBootstrap, FaCss3Alt, FaFlask, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact, FaSass } from "react-icons/fa";

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
                            link={""}
                            linkText={"Recurse!"}
                            title={"Personal Website"}
                            description={"This is the website that you are currently browsing! Designed from scratch without a template. Animations implemented using Framer Motion, and Dark Mode Toggle implemented with help from Styled Components."}
                            icons={{
                                "React": <FaReact />,
                                "HTML5": <FaHtml5 />,
                                "Sass": <FaSass />,
                                "JavaScript": <FaJs />,
                                "Bootstrap": <FaBootstrap />
                            }}
                            theme={props.theme}
                        /></Col>
                        <Col className="center-column"><ProjectItem
                            src={IntegriTweetImg}
                            alt={"IntegriTweet"}
                            title={"IntegriTweet"}
                            link={"https://github.com/jaredjhe/IntegriTweet"}
                            linkText={"Github"}
                            description={"Website that verifies whether a user-uploaded Tweet was authentic or photoshopped using Google Cloud Vision API. Built for Hack the North 2021."}
                            icons={{
                                "React": <FaReact />,
                                "HTML5": <FaHtml5 />,
                                "CSS3": <FaCss3Alt />,
                                "Node.js": <FaNodeJs />
                            }}
                            theme={props.theme}
                        /></Col>
                        <Col className="center-column"><ProjectItem
                            src={CovEDImg}
                            alt={"CovED"}
                            link={"https://github.com/jaredjhe/CovED"}
                            linkText={"Github"}
                            title={"CovED"}
                            description={"Website that compiles learning resources based on different high school curriculums around Canada. Built for students who are struggling through online learning during the COVID-19 pandemic."}
                            icons={{
                                "HTML5": <FaHtml5 />,
                                "CSS3": <FaCss3Alt />,
                                "JavaScript": <FaJs />,
                                "Bootstrap": <FaBootstrap />
                            }}
                            theme={props.theme}
                        /></Col>
                        <Col className="center-column"><ProjectItem
                            src={SkatezyImg}
                            alt={"Skatezy"}
                            link={"https://github.com/jaredjhe/Skatezy"}
                            linkText={"Github"}
                            title={"Skatezy"}
                            description={"Web application that helps users track their figure skating skills and metrics."}
                            icons={{
                                "Flask": <FaFlask />,
                                "Python": <FaPython />,
                                "HTML5": <FaHtml5 />,
                                "CSS3": <FaCss3Alt />,
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