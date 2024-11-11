import styles from "./Track.module.css";
import { Track as TrackType } from "../../types/trackint";

interface TrackProps {
  track: TrackType;
  onAddToPlaylist?: (trackId: number) => void;
  onRemoveFromPlaylist?: (trackId: number) => void;
}

function Track({ track, onAddToPlaylist, onRemoveFromPlaylist }: TrackProps) {
  return (
    <div className={styles.trackItem}>
      <img
        src={track.cover}
        alt={`${track.title} cover`}
        className={styles.cover}
      />
      <div className={styles.trackInfo}>
        <span className={styles.title}>{track.title}</span>
        <span className={styles.artist}>{track.artist}</span>
        <span className={styles.duration}>{track.duration}</span>
      </div>
      <div>
        {onAddToPlaylist && (
          <button onClick={() => onAddToPlaylist(track.id)}>
            Add to Playlist
          </button>
        )}
        {onRemoveFromPlaylist && (
          <button
            className={styles.btn}
            onClick={() => onRemoveFromPlaylist(track.id)}
          >
            Remove from Playlist
          </button>
        )}
      </div>
    </div>
  );
}

export default Track;
