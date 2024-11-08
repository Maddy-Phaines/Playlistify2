import Track from "../Track/Track";
import styles from "./Tracklist.module.css";
// Importing Track interface with an alias in a component file
import { Track as TrackType } from "../../types/trackint";

// Define a TypeScript interface for a track
interface TracklistProps {
  tracks: TrackType[];
  onAddToPlaylist: (trackId: number) => void;
  onRemoveFromPlaylist?: (trackId: number) => void; // Make this optional
}

// Tracklist component
const Tracklist: React.FC<TracklistProps> = ({
  tracks,
  onAddToPlaylist,
  onRemoveFromPlaylist,
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

export default Tracklist;
