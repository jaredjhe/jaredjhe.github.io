import profilePictureImage from "../assets/profile-picture.jpg";

function ProfilePicture() {
    return (
        <img src={profilePictureImage} style={{ width: "60%", height: "auto", borderRadius: "50%" }} alt="Jared He" />
    )
}

export default ProfilePicture;