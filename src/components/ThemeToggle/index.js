import React, {useContext, useState} from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./style.css";

export default function ThemeButton(props) {
  const setTheme = useContext(ThemeContext)[1];

  const [ isLight, setIsLight ] = useState(false);
  const handleClick = () => {
    setIsLight(!isLight);
    isLight ? setTheme("dark") : setTheme("light")
  };

  return (
    <label className="themeButton">
      <input type="checkbox" onClick={props.handleClick} />
      <span className="slider" onClick={handleClick} />
    </label>
  )
}