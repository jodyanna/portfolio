import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./style.css";

export default function ThemeButton(props) {
  const [ theme, setTheme ] = useContext(ThemeContext)

  return (
    <label className="themeButton">
      <input type="checkbox" />
      <span className="slider" onClick={() => {setTheme(theme === "light" ? "dark" : "light")}} />
    </label>
  )
}