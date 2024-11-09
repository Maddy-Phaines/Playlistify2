import React from "react";
import SongItem from "../SongItem/SongItem";
import styles from "./SongList.module.css";
import { Track as TrackType } from "../../types/trackint";

// SongList: Lists the songs.
// SongItem: Displays an individual song.

const SongList: React.FC<{
  songs: TrackType[];
  onAddToPlaylist: (trackId: number) => void;
}> = ({ songs, onAddToPlaylist }) => {
  return (
    <ul className={styles.songList}>
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onAddToPlaylist={() => onAddToPlaylist(song.id)}
        />
      ))}
    </ul>
  );
};

export default SongList;
