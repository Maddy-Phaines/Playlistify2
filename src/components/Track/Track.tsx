import React from "react";
import styles from "./Track.module.css";
function Track({ track, onAddToPlaylist, onRemoveFromPlaylist }) {
  return (
    <>
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
            <button onClick={onRemoveFromPlaylist(track.id)}>
              Remove from playlist
            </button>
          )}
          <span>{track.duration}</span>
        </div>
      </div>
    </>
  );
}

export default Track;
