import "./contacts.scss"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const iconStyles = {
    height: 50,
    width: "auto"
}

function Contacts() {
    return (
        <div className="contacts">
            <div className="social-links">
                <a href="https://github.com/jaredjhe"><FaGithubSquare style={iconStyles} /></a>
                <a href="mailto:"><IoMail style={iconStyles} /></a>
                <a href="https://www.linkedin.com/in/jaredhe/"><FaLinkedin style={iconStyles} /></a>
            </div>
            <div className="resume">
                <p>Resume</p>
            </div>
        </div>
    )
}

export default Contacts;