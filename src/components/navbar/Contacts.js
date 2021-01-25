import "./contacts.scss"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";
import Resume from "../../assets/resume.pdf";

const iconStyles = {
    height: 50,
    width: "auto"
}

function Contacts() {
    return (
        <div className="contacts">
            <div className="social-links">
                <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/jaredjhe" target="_blank" rel="noopener noreferrer"><FaGithubSquare style={iconStyles} /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="mailto:" target="_blank" rel="noopener noreferrer"><IoMail style={iconStyles} /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/jaredhe/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={iconStyles} /></motion.a>
            </div>
            <motion.div
                className="resume"
                whileHover={{ scale: 1.1 }}
            >
                <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </motion.div>
        </div>
    )
}

export default Contacts;