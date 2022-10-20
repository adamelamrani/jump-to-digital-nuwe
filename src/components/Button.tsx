import React from "react";
import { buttonTextSelector } from "../utils/buttonTextSelector";
import "./styles/buttonStyle.css";

interface ButtonProps {
  classType: string;
  actionOnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ classType, actionOnClick }) => {
  const text = buttonTextSelector(classType);
  return (
    <button className={`button_${classType}`} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
