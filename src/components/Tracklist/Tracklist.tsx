import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";
import PropTypes from "prop-types";

const Tracklist = ({ tracks = [], onAddToPlaylist, onRemoveFromPlaylist }) => {
  return (
    <div className={styles.tracklist}>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAddToPlaylist={onAddToPlaylist}
          onRemoveFromPlaylist={onRemoveFromPlaylist}
        />
      ))}
    </div>
  );
};

Tracklist.propTypes = {
  tracks: PropTypes.array.isRequired,
  onAddToPlaylist: PropTypes.func.isRequired,
  onRemoveFromPlaylist: PropTypes.func,
};

export default Tracklist;
