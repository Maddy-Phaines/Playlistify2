import { Track as TrackType } from "../../types/trackint";
import styles from "./SearchResults.module.css";
import ArtistProfile from "../ArtistProfile/ArtistProfile";
import SongList from "../SongList/SongList";

interface SearchResultsProps {
  songs: TrackType[];
  onAddToPlaylist: (trackId: number) => void;
  searchResults: TrackType[];
  topArtist?: TrackType; // optional if you sometimes do not have a top artist
  hasSearched: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  onAddToPlaylist,
  topArtist,
  hasSearched,
}) => {
  // First, check if a search has been made
  if (!hasSearched) return null; // Nothing is rendered until a search is made

  // Check if there are any results after a search has been made
  if (searchResults.length === 0) {
    return <div className={styles.resultsContainer}>No results found.</div>;
  }

  // If there are results, render the component normally
  return (
    <div className={styles.resultsContainer}>
      {searchResults.length > 0 && topArtist && (
        <>
          <ArtistProfile artist={topArtist.artist} cover={topArtist.cover} />
          <SongList songs={searchResults} onAddToPlaylist={onAddToPlaylist} />
        </>
      )}
    </div>
  );
};

export default SearchResults;
