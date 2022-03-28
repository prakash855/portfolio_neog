import { createContext, useContext, useState } from "react";

const initialValue = {
  theme: "light",
  changeTheme: () => {},
};

const ThemeContext = createContext(initialValue);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (value) => setTheme(value);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
