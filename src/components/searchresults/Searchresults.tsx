import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ searchResults, onAddToPlaylist }) {
  return (
    <div className={styles.resultsContainer}>
      <h2>Search Results</h2>
      <Tracklist tracks={searchResults} onAddToPlaylist={onAddToPlaylist} />
    </div>
  );
}

export default SearchResults;
