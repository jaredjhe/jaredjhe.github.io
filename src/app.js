import './app.scss';
import { ThemeProvider } from "styled-components";

const lightTheme = {
    mainColor: "FF4500",
    secondaryColor: "#CC3600",
    backgroundColor: "#E7E4E1",
    backgroundHighlight: "#FFFFFF"
}

const darkTheme = {
    mainColor: "FF4500",
    secondaryColor: "#CC3600",
    backgroundColor: "#000000",
    backgroundHighlight: "#000000"
}

const themes = {
    light: lightTheme,
    dark: darkTheme
}

function App() {
  return (
      <ThemeProvider>
        <h1>Hello World!</h1>
        <p>Paragraph</p>
      </ThemeProvider>
  );
}

export default App;
