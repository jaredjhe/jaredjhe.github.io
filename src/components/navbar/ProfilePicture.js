import "./profile-picture.scss"

import profilePictureImage from "../../assets/profile-picture.jpg";

function ProfilePicture() {
  return (
    <img
      id="profile-picture"
      src={profilePictureImage}
      alt="Jared He"
    />
  );
}

export default ProfilePicture;
