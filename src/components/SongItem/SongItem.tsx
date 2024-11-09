import React from "react";
import styles from "./SongItem.module.css";
import { Track as TrackType } from "../../types/trackint";

// SongItem: Displays an individual song.
const SongItem: React.FC<{ song: TrackType; onAddToPlaylist: () => void }> = ({
  song,
  onAddToPlaylist,
}) => {
  return (
    <li className={styles.SongItem}>
      <img>{song.cover}</img>
      <div>
        <span>{song.title}</span>
        <span>{song.duration}</span>
      </div>
      <button onClick={onAddToPlaylist}>+</button>
    </li>
  );
};

export default SongItem;
