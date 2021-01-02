import { useState } from "react";
import Heading from "./components/heading";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    textColor: "#000000",
    backgroundColor: "#E7E4E1",
    backgroundHighlight: "#FFFFFF"
}

const darkTheme = {
    textColor: "#FFFFFF",
    backgroundColor: "#000000",
    backgroundHighlight: "#E7E4E1"
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
        </ThemeProvider>
    );
}

export default App;
