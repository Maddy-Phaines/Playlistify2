import React from "react";
import styles from "./SongItem.module.css";
import { Track as TrackType } from "../../types/trackint";

// SongItem: Displays an individual song.
const SongItem: React.FC<{
  song: TrackType;
  onAddToPlaylist: (id: number) => void;
}> = ({ song, onAddToPlaylist }) => {
  return (
    <div className={styles.trackItem}>
      <div className={styles.trackDetails}>
        <div
          className={styles.trackCover}
          style={{ backgroundImage: `url(${song.cover})` }} // Use inline styles for dynamic image URLs
        />
        <span className={styles.trackName}>{song.title}</span>
        <span className={styles.trackAlbum}>{song.album}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => onAddToPlaylist(song.id)}>
          Add to Playlist
        </button>
      </div>
    </div>
  );
};

export default SongItem;
