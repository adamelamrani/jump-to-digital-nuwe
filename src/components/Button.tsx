import React from "react";
import { buttonTextSelector } from "../utils/buttonTextSelector";
import "./styles/buttonStyle.css";

interface ButtonProps {
  classType: string;
  actionOnClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  classType,
  actionOnClick,
  disabled,
}) => {
  const text = buttonTextSelector(classType);
  return (
    <button
      className={`button_${classType}`}
      onClick={actionOnClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
