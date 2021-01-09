import "./sidebar.scss";

import ProfilePicture from "./profile-picture";
import NavLinks from "./nav-links";
import Contacts from "./contacts";

function Sidebar() {
    return (
        <div className="sidebar">
            <ProfilePicture />
            <h3>Jared He</h3>
            <hr />
            <div className="nav-links-sidebar">
                <NavLinks />
            </div>
            <hr />
            <Contacts />
        </div>
    )
}

export default Sidebar;