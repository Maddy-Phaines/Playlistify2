import styles from "./Track.module.css";
import { Track as TrackType } from "../../types/trackint";
import Button from "../Button/Button";
import sharedStyles from "../shared/shared.module.css";

interface TrackProps {
  track: TrackType;
  onAddToPlaylist?: (trackId: number) => void;
  onRemoveFromPlaylist?: (trackId: number) => void;
}

function Track({ track, onAddToPlaylist, onRemoveFromPlaylist }: TrackProps) {
  return (
    <div className={sharedStyles.trackItem}>
      <img
        src={track.cover}
        style={{ backgroundImage: `url(${track.cover})` }}
        alt={`${track.title} cover`}
        className={sharedStyles.trackCover}
      />
      <div className={styles.trackInfo}>
        <div className={styles.contFlex}>
          <span className={`${styles.title} ${sharedStyles.truncateText}`}>
            {track.title}
          </span>
          <span className={`${styles.artist} ${sharedStyles.truncateText}`}>
            {track.artist}
          </span>
        </div>
      </div>
      <div className={styles.btnContainer}>
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
      <span className={styles.duration}>{track.duration}</span>
    </div>
  );
}

export default Track;
