import React from "react";
import { buttonTextSelector } from "../utils/buttonTextSelector";
import "./styles/buttonStyle.css";

interface ButtonProps {
  classType: string;
}

const Button: React.FC<ButtonProps> = ({ classType }) => {
  const text = buttonTextSelector(classType);
  return <button className={`button_${classType}`}>{text}</button>;
};

export default Button;
