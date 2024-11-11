import styles from "./Track.module.css";
import { Track as TrackType } from "../../types/trackint";
import Button from "../Button/Button";

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
          <Button onClick={() => onAddToPlaylist(track.id)} iconType="add" />
        )}
        {onRemoveFromPlaylist && (
          <Button
            onClick={() => onRemoveFromPlaylist(track.id)}
            iconType="remove"
          />
        )}
      </div>
    </div>
  );
}

export default Track;
