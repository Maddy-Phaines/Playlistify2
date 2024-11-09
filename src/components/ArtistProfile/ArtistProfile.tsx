import React from "react";
import styles from "./ArtistProfile.module.css";

const ArtistProfile: React.FC<{ artist: string; cover: string }> = ({
  artist,
  cover,
}) => {
  return (
    <div className={styles.profile}>
      <img src={cover} alt={artist} />
      <h2 className={styles.artistName}>{artist}</h2>
    </div>
  );
};

export default ArtistProfile;
