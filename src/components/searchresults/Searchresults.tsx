import { Track as TrackType } from "../../types/trackint";
import styles from "./SearchResults.module.css";
import ArtistProfile from "../ArtistProfile/ArtistProfile";
import SongList from "../SongList/SongList";

interface SearchResultsProps {
  songs: TrackType[];
  onAddToPlaylist: (trackId: number) => void;
  searchResults: TrackType[];
  topArtist?: TrackType; // optional if you sometimes do not have a top artist
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  onAddToPlaylist,
}) => {
  return (
    <div className={styles.resultsContainer}>
      {searchResults.length > 0 && (
        <>
          <ArtistProfile
            artist={searchResults[0].artist}
            cover={searchResults[0].cover}
          />
          <SongList songs={searchResults} onAddToPlaylist={onAddToPlaylist} />
        </>
      )}
    </div>
  );
};

export default SearchResults;
