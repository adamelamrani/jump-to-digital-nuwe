import React from "react";
import { imageSelector } from "../utils/imageSelector";
import Heading from "./Heading";
import "./styles/cardStyle.css";

interface CardProps {
  cardType: string;
}

const Card: React.FC<CardProps> = ({ cardType }) => {
  const selectedImage = imageSelector(cardType);
  return (
    <div className={cardType}>
      <img src={selectedImage.class} alt={selectedImage.alt} />
      <Heading classType={cardType} />
      <ul className={`available-perks_${cardType}`}>
        <li className="list-element">Full courses library</li>
        <li className="list-element">A new daily meditation</li>
        <li className="list-element">Access to the meditation guru</li>
        <li className="list-element">Sleep podcast and exercices</li>
        <li className="list-element">Mindfulness exercices</li>
        <li className="list-element">Guided meditations</li>
        <li className="list-element">Cooking recipes</li>
      </ul>
    </div>
  );
};

export default Card;
