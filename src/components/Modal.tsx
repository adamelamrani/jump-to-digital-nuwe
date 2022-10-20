import React, { useState } from "react";
import { emailValidation } from "../utils/emailValidation";
import Button from "./Button";
import "./styles/modalStyle.css";
interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal }) => {
  const [isEmailWrong, setIsEmailWrong] = useState<boolean>(true);

  return (
    <div className="modal-backdrop">
      <div className="modal-content-box">
        <h3>We will get in touch with you!</h3>
        <p className="close-button" onClick={() => setOpenModal(false)}>
          ❌
        </p>
        <div className="input-section">
          <p>
            Introduce your e-mail address and we will contact you as soon as
            possible.
          </p>
          <input
            type="email"
            placeholder="email@example.com"
            onChange={(e) => {
              if (emailValidation(e.target.value)) {
                setIsEmailWrong(false);
              }
            }}
          />
          {isEmailWrong && (
            <span>
              <p>Your e-mail is not valid</p>
            </span>
          )}
        </div>
        <Button
          classType={isEmailWrong ? "disabled-button" : "button-modal"}
          disabled={isEmailWrong}
          actionOnClick={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
};

export default Modal;
