import "./toggle-dark-mode.scss";
import { IoSunny, IoMoon } from "react-icons/io5";

const sunStyles = {
  height: "60%",
  width: "60%",
  color: "white",
};

const moonStyles = {
  height: "60%",
  width: "60%",
  color: "white",
};

const sunIcon = <IoSunny style={sunStyles} />;
const moonIcon = <IoMoon style={moonStyles} />;

function ToggleDarkMode(props) {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  return (
    <label className="toggle-dark-mode">
      <input
        type="checkbox"
        className="toggle-dark-mode-input"
        onClick={changeTheme}
      ></input>
      <div className="toggle-dark-mode-fill">
        <div className="toggle-dark-mode-icon">
          {props.theme === "light" ? moonIcon : sunIcon}
        </div>
      </div>
    </label>
  );
}

export default ToggleDarkMode;
