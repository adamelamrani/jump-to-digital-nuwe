import React from "react";
import { headingSelector } from "../utils/headingSelector";
import "./styles/headingStyle.css";

interface HeadingProps {
  classType: string;
}

const Heading: React.FC<HeadingProps> = ({ classType }) => {
  const text = headingSelector(classType);
  return (
    <div className={`heading_${classType}`}>
      <p className="plan-type">{text.planType}</p>
      <p className="plan-price">{text.planPrice}</p>
      <p className="plan-recurrence">{text.planRecurrence}</p>
    </div>
  );
};

export default Heading;
