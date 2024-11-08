import styles from "./Track.module.css";
import { Track as TrackType } from "../../types/trackint";

interface TrackProps {
  track: TrackType;
  onAddToPlaylist?: (trackId: number) => void;
  onRemoveFromPlaylist?: (trackId: number) => void;
}

function Track({ track, onAddToPlaylist, onRemoveFromPlaylist }: TrackProps) {
  return (
    <div className={styles.container}>
      <img src={track.cover} alt={`${track.title} cover`} />
      <div className={styles.trackInfo}>
        <p>{track.title}</p>
        <p>{track.artist}</p>
      </div>
      <div>
        {onAddToPlaylist && (
          <button onClick={() => onAddToPlaylist(track.id)}>
            Add to Playlist
          </button>
        )}
        {onRemoveFromPlaylist && (
          <button onClick={() => onRemoveFromPlaylist(track.id)}>
            Remove from Playlist
          </button>
        )}
        <span>{track.duration}</span>
      </div>
    </div>
  );
}

export default Track;
