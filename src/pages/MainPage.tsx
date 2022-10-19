import React from "react";
import Card from "../components/Card";
import "./styles/style.css";

const MainPage: React.FC = () => {
  return (
    <main className="main-view">
      <div className="card-container">
        <Card cardType="tier-zero" />
        <Card cardType="tier-one" />
        <Card cardType="tier-two" />
      </div>
    </main>
  );
};

export default MainPage;
