import "./sidebar.scss";

import ProfilePicture from "./ProfilePicture";
import NavLinks from "./NavLinks";
import Contacts from "./Contacts";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*<ProfilePicture />*/}
      <h3>Jared He</h3>
      <hr />
      <NavLinks />
      <hr />
      <Contacts />
    </div>
  );
}

export default Sidebar;
