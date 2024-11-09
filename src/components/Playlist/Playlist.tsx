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
  const handleNameChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  return (
    <div className={styles.playlistContainer}>
      <div className={styles.playlistHeader}>
        <img
          src="/path-to-your-image.jpg"
          className={styles.playlistImage}
          alt="Playlist"
        />
        <form onSubmit={handleNameChange}>
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistNameQuery(e.target.value)}
            className={styles.playlistName}
          />
        </form>
      </div>
      <div className={styles.trackList}>
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={
              index === tracks.length - 1 ? styles.lastItem : styles.trackItem
            }
          >
            <Track
              track={track}
              onRemoveFromPlaylist={() => onRemoveFromPlaylist(track.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
