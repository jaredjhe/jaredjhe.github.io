import "./sidebar.scss";
import profilePicture from "../assets/profile-picture.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const iconStyle = {
    height: 50,
    width: "auto"
}

function Sidebar() {
    return (
        <div className="sidebar">    
            <img src={profilePicture} alt="Jared He"/>
            <h1>Jared He</h1>
            <hr />
            <div className="nav-links">
            </div>
            <hr />
            <div className="social-links">
                <a href="https://github.com/jaredjhe"><FaGithubSquare style={iconStyle} /></a>
                <a href="mailto:"><IoMail style={iconStyle} /></a>
                <a href="https://www.linkedin.com/in/jaredhe/"><FaLinkedin style={iconStyle} /></a>
            </div>
        </div>
    )
}

export default Sidebar;