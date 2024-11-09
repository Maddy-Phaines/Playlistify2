import Tracklist from "../Tracklist/Tracklist";
import { Track as TrackType } from "../../types/trackint";
import styles from "./SearchResults.module.css";
import ArtistProfile from "./ArtistProfile";
import SongList from "./SongList";

interface SearchResultsProps {
  topArtist: TrackType;
  songs: TrackType[];
  onAddToPlaylist: (trackId: number) => void;
}

const searchResults: React.FC<SearchResultsProps> = ({
  topArtist,
  songs,
  onAddToPlaylist,
}) => {
  return (
    <div className={styles.resultsContainer}>
      <ArtistProfile artist={topArtist} />
      <SongList songs={songs} onAddToPlaylist={onAddToPlaylist} />
    </div>
  );
};

export default SearchResults;
