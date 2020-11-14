import React from "react";

const themes = {
  light: {
    foreground: "#121212",
    background: "#f5f5f5"
  },
  dark: {
    foreground: "#f5f5f5",
    background: "#121212"
  }
};

const ThemeContext = React.createContext(["dark", () => {}]);
export default ThemeContext;
