import React from "react";
import Card from "../components/Card";
import "./styles/style.css";

const MainPage: React.FC = () => {
  return (
    <main className="main-view">
      <p>Main page</p>
      <Card cardType="tier-zero" />
    </main>
  );
};

export default MainPage;
