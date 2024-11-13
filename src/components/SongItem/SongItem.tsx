import React from "react";
import styles from "./SongItem.module.css";
import { Track as TrackType } from "../../types/trackint";
import Button from "../Button/Button";
import sharedStyles from "../shared/shared.module.css";
import artistProfile from "../../assets/images/artist_profile.jpg";

// SongItem: Displays an individual song.
const SongItem: React.FC<{
  song: TrackType;
  onAddToPlaylist: (id: number) => void;
}> = ({ song, onAddToPlaylist }) => {
  return (
    <div className={sharedStyles.trackItem}>
      <img
        className={`${sharedStyles.trackCover}`}
        src={artistProfile} // Use inline styles for dynamic image URLs
      />
      <div className={styles.trackDetails}>
        <span className={styles.trackName}>{song.title}</span>
        <span className={styles.trackAlbum}>{song.album}</span>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => onAddToPlaylist(song.id)} iconType="add" />
      </div>
    </div>
  );
};

export default SongItem;
