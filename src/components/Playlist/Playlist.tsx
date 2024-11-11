/* pass the playlist tracks from the component responsible for the Playlist to the component responsible for the Tracklist. */
import React from "react";
import Track from "../Track/Track"; // Assuming Track is a component for individual track items
import styles from "./Playlist.module.css";
import { Track as TrackType } from "../../types/trackint";

interface PlaylistProps {
  tracks: TrackType[];
  onRemoveFromPlaylist: (trackId: number) => void;
  playlistName: string;
  setPlaylistName: (name: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  tracks,
  onRemoveFromPlaylist,
  playlistName,
  setPlaylistName,
}) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.playlistContainer}>
      <img
        src="/path-to-your-image.jpg"
        className={styles.playlistImage}
        alt="Playlist"
      />
      <form onSubmit={handleSubmit}>
        <button className={styles.hiddenBtn} type="submit">
          playlist name
        </button>
        <input
          type="text"
          placeholder="Give your playlist a name..."
          value={playlistName}
          className={styles.playlistName}
          onChange={handleNameChange}
        />
      </form>
      <div className={styles.trackList}>
        {tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onRemoveFromPlaylist={() => onRemoveFromPlaylist(track.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
