import "./sidebar.scss";
import ProfilePicture from "./profile-picture";
import Contacts from "./contacts";

function Sidebar() {
    return (
        <div className="sidebar">
            <ProfilePicture />
            <h3>Jared He</h3>
            <hr />
            <div className="nav-links">
            </div>
            <hr />
            <Contacts />
        </div>
    )
}

export default Sidebar;