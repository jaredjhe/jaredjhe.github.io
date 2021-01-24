import "./nav-links.scss"

import { Link } from "react-scroll";
import { FaHome, FaTools, FaCogs } from "react-icons/fa"

function NavLinks() {
    return (
        <div className="nav-links">
            <Link to="home-scroll" activeClass="active" spy={true} smooth={true}>
                <div className="nav-link"><FaHome /><p>Home</p></div>
            </Link>
            <Link to="skills-scroll" spy={true} smooth={true}>
                <div className="nav-link"><FaTools /><p>Skills</p></div>
            </Link>
            <Link to="projects-scroll" spy={true} smooth={true}>
                <div className="nav-link"><FaCogs /><p>Projects</p></div>
            </Link>
        </div>
    )
}

export default NavLinks;