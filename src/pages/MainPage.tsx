import React, { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import "./styles/style.css";

const MainPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <main className="main-view">
        <Card setOpenModal={setOpenModal} cardType="tier-zero" />
        <Card setOpenModal={setOpenModal} cardType="tier-one" />
        <Card setOpenModal={setOpenModal} cardType="tier-two" />
      </main>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default MainPage;
