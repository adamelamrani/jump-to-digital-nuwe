import React from "react";
import { imageSelector } from "../utils/imageSelector";
import Button from "./Button";
import Heading from "./Heading";
import "./styles/cardStyle.css";

interface CardProps {
  cardType: string;
}

const Card: React.FC<CardProps> = ({ cardType }) => {
  const selectedImage = imageSelector(cardType);
  return (
    <div className={cardType}>
      <img
        className="heading-img"
        src={selectedImage.class}
        alt={selectedImage.alt}
      />
      <Heading classType={cardType} />
      <ul className={`available-perks_${cardType}`}>
        <li className="list-element">
          <img
            className="check-icon"
            src={cardType === "tier-one" ? "whiteCheck.svg" : "checkIcon.svg"}
            alt="Check icon"
          />
          Full courses library
        </li>
        <li className="list-element">
          <img
            className="check-icon"
            src={cardType === "tier-one" ? "whiteCheck.svg" : "checkIcon.svg"}
            alt="Check icon"
          />
          A new daily meditation
        </li>
        <li className="list-element">
          <img
            className="check-icon"
            src={cardType === "tier-one" ? "whiteCheck.svg" : "checkIcon.svg"}
            alt="Check icon"
          />
          Access to the meditation guru
        </li>
        <li className="list-element">
          <img
            className="check-icon"
            src={cardType === "tier-one" ? "whiteCheck.svg" : "checkIcon.svg"}
            alt="Check icon"
          />
          Sleep podcast and exercices
        </li>
        <li className="list-element">
          <img
            className="check-icon"
            src={cardType === "tier-one" ? "whiteCheck.svg" : "checkIcon.svg"}
            alt="Check icon"
          />
          Mindfulness exercices
        </li>
        <li className="list-element">
          <img
            className="check-icon"
            src={cardType === "tier-one" ? "whiteCheck.svg" : "checkIcon.svg"}
            alt="Check icon"
          />
          Guided meditations
        </li>
        <li className="list-element">
          <img
            className="check-icon"
            src={cardType === "tier-one" ? "whiteCheck.svg" : "checkIcon.svg"}
            alt="Check icon"
          />
          Cooking recipes
        </li>
      </ul>
      <Button classType={cardType} />
    </div>
  );
};

export default Card;
