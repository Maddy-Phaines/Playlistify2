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
  // Make sure this is used if passed as a prop
  // Use this to show the success message
  isSaved,
}) => {
  const [hasAttemptedSave, setHasAttemptedSave] = useState(false);
  const [playlistNameError, setPlaylistNameError] = useState(false);
  const [tracksError, setTracksError] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
    if (playlistNameError) setPlaylistNameError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSavePlaylist = () => {
    setHasAttemptedSave(true);

    // Validate playlist name
    if (!playlistName.trim()) {
      setPlaylistNameError(true);
      console.warn("Playlist name cannot be empty.");
      return;
    } else {
      setPlaylistNameError(false);
    }

    // Validate tracks
    if (tracks.length === 0) {
      setTracksError(true);
      console.warn("No tracks to save!");
      return;
    } else {
      setTracksError(false);
    }
    // Save the playlist
    savePlaylist(tracks);

    // Clear playlist name and reset placeholder
    setPlaylistName("");
    console.log("Playlist saved and cleared");
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
        <div>
          <input
            type="text"
            placeholder="Give your playlist a name..."
            value={playlistName}
            className={styles.playlistName}
            onChange={handleNameChange}
          />
          {hasAttemptedSave && playlistNameError && (
            <p style={{ color: "red" }}>Please give your playlist a name!</p>
          )}
        </div>
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

      {hasAttemptedSave && tracksError && (
        <p style={{ color: "red" }}>Add some tracks to save!</p>
      )}

      {hasAttemptedSave && isSaved && (
        <p style={{ color: "white" }}>Playlist saved successfully!</p>
      )}
    </div>
  );
};

export default Playlist;
