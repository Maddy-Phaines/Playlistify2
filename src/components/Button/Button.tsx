import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  iconType: "add" | "remove";
}
// Resuable component with an anonymous callback function. Has no 'knowledge' of the song object.
const Button: React.FC<ButtonProps> = ({ onClick, iconType }) => {
  const icon = iconType === "add" ? faPlusCircle : faTimesCircle;
  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.addButton} onClick={onClick}>
          <FontAwesomeIcon icon={icon} />
        </button>
      </div>
    </>
  );
};

export default Button;
