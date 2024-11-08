import Track from "../Track/Track";
// Importing Track interface with an alias in a component file
import { Track as TrackType } from "../../types/trackint";

// Define the track type structure
interface TrackType {
    id: number;
    title: string;
    artist: string;
    cover: string;
    duration: string;
  }
  
  // Define the props for the Playlist component
  interface PlaylistProps {
    playlist: TrackType[];
    onRemoveFromPlaylist: (trackId: number) => void;
  }
  

// Playlist component
const Playlist: React.FC<PlaylistProps> = ({ playlist, onRemoveFromPlaylist }) => {
  tracks,
  onRemoveFromPlaylist
}) => {
  return (
    <div className={styles.tracklist}>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAddToPlaylist={() => onAddToPlaylist(track.id)}
          onRemoveFromPlaylist={() =>
            onRemoveFromPlaylist && onRemoveFromPlaylist(track.id)
          }
        />
      ))}
    </div>
  );
};

export default Playlist;
