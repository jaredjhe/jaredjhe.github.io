import "./nav-links.scss"
import { motion } from "framer-motion";

import { Link } from "react-scroll";
import { FaHome, FaTools, FaCogs } from "react-icons/fa"

function NavLinks() {
    return (
        <div className="nav-links">
            <Link to="home-scroll" activeClass="active" spy={true} smooth={true}>
                <motion.div whileHover={{scale: 1.2}} className="nav-link"><FaHome /><p>Home</p></motion.div>
            </Link>
            <Link to="skills-scroll" spy={true} smooth={true}>
                <motion.div whileHover={{scale: 1.2}} className="nav-link"><FaTools /><p>Skills</p></motion.div>
            </Link>
            <Link to="projects-scroll" spy={true} smooth={true}>
                <motion.div whileHover={{scale: 1.2}} className="nav-link"><FaCogs /><p>Projects</p></motion.div>
            </Link>
        </div>
    )
}

export default NavLinks;