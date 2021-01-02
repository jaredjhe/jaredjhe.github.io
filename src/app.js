import { useState } from "react";
import Heading from "./components/heading";
import About from "./components/about";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    textColor: "#000000",
    backgroundMainColor: "#E7E4E1",
    backgroundSecondaryColor: "#FFFFFF"
}

const darkTheme = {
    textColor: "#FFFFFF",
    backgroundMainColor: "#000000",
    backgroundSecondaryColor: "#7A7774"
}

const themes = {
    light: lightTheme,
    dark: darkTheme
}

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeProvider theme={themes[theme]}>
            <Heading theme={theme} setTheme={setTheme} />
            <About theme={theme}/>
        </ThemeProvider>
    );
}

export default App;
