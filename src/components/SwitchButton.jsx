import React from "react";
import { Switch } from "antd";
import { useTheme } from "../context/ThemeContext";

const SwitchButton = () => {
  const { theme, changeTheme } = useTheme();
  const onChange = () => {
    changeTheme(theme === `dark` ? `light` : `dark`);
  };
  return <Switch onChange={onChange} />;
};

export default SwitchButton;
