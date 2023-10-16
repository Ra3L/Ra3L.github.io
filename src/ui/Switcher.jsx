import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkTheme from "../Hooks/useDarkTheme";

function Switcher() {
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };
  return (
    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={20} />
  );
}

export default Switcher;
