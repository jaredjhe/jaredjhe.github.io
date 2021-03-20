import "./skills.scss";
import SkillButton from "./SkillButton";
import { SecondaryTheme, H2Line } from "../ThemeWrappers";
import { Container, Col, Row } from "react-bootstrap";

import { CgWebsite } from "react-icons/cg";
import { SiAdobexd, SiLatex, SiTailwindcss } from "react-icons/si";
import { FaServer, FaToolbox } from "react-icons/fa";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

function Skills(props) {
  return (
    <SecondaryTheme>
      <div className="skills-scroll-wrapper">
        <div id="skills-scroll">
          <div className="skills">
            <div className="skills-title">
              <h2>Skills</h2>
              <H2Line />
            </div>
            <div className="skills-subtitle" id="front-end">
              <CgWebsite />
              <p id="front-end">Front-End</p>
            </div>
            <Container style={{ paddingLeft: 0, paddingRight: 0 }} fluid>
              <Row xs={2} md={3} xl={4} noGutters={true}>
                <Col>
                  <SkillButton
                    color={"#57b6ec"}
                    text={"React"}
                    logo={<FaReact />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#e34c26"}
                    text={"HTML5"}
                    logo={<FaHtml5 />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#2965f1"}
                    text={"CSS3"}
                    logo={<FaCss3Alt />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#ccb100"}
                    text={"JavaScript"}
                    smallText={true}
                    logo={<FaJs />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#563d7c"}
                    text={"Bootstrap"}
                    smallText={true}
                    logo={<FaBootstrap />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#cc6699"}
                    text={"Sass"}
                    logo={<FaSass />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#06b6d4"}
                    text={"Tailwind"}
                    smallText={true}
                    logo={<SiTailwindcss />}
                    theme={props.theme}
                  />
                </Col>
              </Row>
            </Container>
            <div className="skills-subtitle">
              <FaServer />
              <p>Back-End</p>
            </div>
            <Container style={{ paddingLeft: 0, paddingRight: 0 }} fluid>
              <Row xs={2} md={3} xl={4} noGutters={true}>
                <Col>
                  <SkillButton
                    color={"#f89820"}
                    text={"Java"}
                    logo={<FaJava />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#4b8bbe"}
                    text={"Python"}
                    logo={<FaPython />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#3747a6"}
                    text={"Racket"}
                    logo={<FaServer />}
                    theme={props.theme}
                  />
                </Col>
              </Row>
            </Container>
            <div className="skills-subtitle">
              <FaToolbox />
              <p>Other Tools</p>
            </div>
            <Container style={{ paddingLeft: 0, paddingRight: 0 }} fluid>
              <Row xs={2} md={3} xl={4} noGutters={true}>
                <Col>
                  <SkillButton
                    color={"#f34f29"}
                    text={"Git"}
                    logo={<FaGitAlt />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#00c05b"}
                    text={"Figma"}
                    logo={<FaFigma />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#844cb0"}
                    text={"Adobe XD"}
                    smallText={true}
                    logo={<SiAdobexd />}
                    theme={props.theme}
                  />
                </Col>
                <Col>
                  <SkillButton
                    color={"#008181"}
                    text={"LaTeX"}
                    logo={<SiLatex />}
                    theme={props.theme}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </SecondaryTheme>
  );
}

export default Skills;
