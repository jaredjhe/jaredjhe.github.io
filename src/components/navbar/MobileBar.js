import "./mobile-bar.scss";

import ProfilePicture from "./ProfilePicture";
import Contacts from "./Contacts"

function MobileBar() {
  return (
    <div className="mobile-bar">
      {/*<ProfilePicture />
      <hr/>*/}
      <Contacts />
    </div>
  )
}

export default MobileBar;