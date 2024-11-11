import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Button.module.css";

interface ButtonProps {
  onAddToPlaylist?: (trackId: number) => void;
  onRemoveFromPlaylist?: (trackId: number) => void;
}

const ButtonProps: React.FC<ButtonProps> = ({
  onAddToPlaylist,
  onRemoveFromPlaylist,
}) => {
  return (
    <>
      <button className={styles.addButton}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </>
  );
};
