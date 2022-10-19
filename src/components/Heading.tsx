import React from "react";
import "./styles/headingStyle.css";

interface HeadingProps {
  classType: string;
}

const Heading: React.FC<HeadingProps> = ({ classType }) => {
  return (
    <div className={`heading_${classType}`}>
      <p className="plan-type">Ejemplo</p>
      <p className="plan-price">Precio</p>
      <p className="plan-recurrence">per month</p>
    </div>
  );
};

export default Heading;
