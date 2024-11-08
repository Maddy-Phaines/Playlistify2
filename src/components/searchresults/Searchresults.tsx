import Tracklist from "../Tracklist/Tracklist";
import { Track as TrackType } from "../../types/trackint";

// Define a TypeScript interface for a track
interface SearchResultsProps {
  searchResults: TrackType[]; // Using TrackType alias here
  onAddToPlaylist: (trackId: number) => void;
  onRemoveFromPlaylist?: (trackId: number) => void; // Make this optional
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  onAddToPlaylist,
}) => {
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={searchResults} onAddToPlaylist={onAddToPlaylist} />
    </div>
  );
};

export default SearchResults;
