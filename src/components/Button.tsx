import React from "react";
import { buttonTextSelector } from "../utils/buttonTextSelector";

interface ButtonProps {
  classType: string;
}

const Button: React.FC<ButtonProps> = ({ classType }) => {
  const text = buttonTextSelector(classType);
  return <button>{text}</button>;
};

export default Button;
