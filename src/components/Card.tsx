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
    </div>
  );
};

export default Card;
