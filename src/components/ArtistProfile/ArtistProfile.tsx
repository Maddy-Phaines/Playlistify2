import React from "react";
import styles from "./ArtistProfile.module.css";
import artistProfile from "../../assets/images/artist_profile.jpg";

const ArtistProfile: React.FC<{ artist: string; cover: string }> = ({
  artist,
  cover,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <img className={styles.profilePic} src={artistProfile} alt={artist} />
      </div>
      <h2 className={styles.artistName}>{artist}</h2>
    </div>
  );
};

export default ArtistProfile;
