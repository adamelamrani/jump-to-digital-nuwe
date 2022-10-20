import React from "react";
import Button from "./Button";
import "./styles/modalStyle.css";
interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content-box">
        <p>HOLA</p>
        <Button
          classType="button-modal"
          actionOnClick={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
};

export default Modal;
