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
                <a href="https://github.com/jaredjhe" target="_blank" rel="noopener noreferrer"><FaGithubSquare style={iconStyles} /></a>
                <a href="mailto:" target="_blank" rel="noopener noreferrer"><IoMail style={iconStyles} /></a>
                <a href="https://www.linkedin.com/in/jaredhe/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={iconStyles} /></a>
            </div>
            <div className="resume">
                <p>Resume</p>
            </div>
        </div>
    )
}

export default Contacts;