/* pass the playlist tracks from the component responsible for the Playlist to the component responsible for the Tracklist. */
import { useState } from "react";
import Track from "../Track/Track"; // Assuming Track is a component for individual track items
import styles from "./Playlist.module.css";
import { Track as TrackType } from "../../types/trackint";
import sharedStyles from "../shared/shared.module.css";
import artistProfile from "../../assets/images/artist_profile.jpg";

interface PlaylistProps {
  tracks: TrackType[];
  onRemoveFromPlaylist: (trackId: number) => void;
  playlistName: string;
  setPlaylistName: (name: string) => void;
  savePlaylist: (playlistArray: TrackType[]) => void;
  setPlaylist: React.Dispatch<React.SetStateAction<TrackType[]>>; // Correct type
  isSaved: boolean;
}

const Playlist: React.FC<PlaylistProps> = ({
  tracks,
  onRemoveFromPlaylist,
  playlistName,
  setPlaylistName,
  savePlaylist,
  setPlaylist, // Make sure this is used if passed as a prop
  // Use this to show the success message
  isSaved,
}) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [hasAttemptedSave, setHasAttemptedSave] = useState(false);

  const handleSavePlaylist = () => {
    setHasAttemptedSave(true);
    if (tracks.length === 0) {
      console.log("No tracks to save!");
      return;
    }
    savePlaylist(tracks);
  };
  return (
    <div className={sharedStyles.panel}>
      <img
        src={artistProfile}
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
      <button onClick={handleSavePlaylist}>Save to Spotify</button>
      {hasAttemptedSave &&
        (isSaved ? (
          <p>Playlist saved successfully!</p>
        ) : (
          <p>Add some tracks to save!</p>
        ))}
    </div>
  );
};

export default Playlist;
