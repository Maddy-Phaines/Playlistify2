import { useState } from "react";
import SearchBar from "../Searchbar/Searchbar";
import Tracklist from "../Tracklist/Tracklist";
import SearchResults from "../searchresults/Searchresults";
import { Track as TrackType } from "../../types/trackint";

function App() {
  const [searchResults, setSearchResults] = useState<TrackType[]>([]);
  const [playlist, setPlaylist] = useState<TrackType[]>([]);
  const [query, setQuery] = useState<string>("");

  // Sample data for tracks
  const tracks: TrackType[] = [
    {
      id: 1,
      title: "Taste",
      artist: "Sabrina Carpenter",
      cover: "cover1.jpg",
      duration: "2:37",
    },
    {
      id: 2,
      title: "Please Please Please",
      artist: "Sabrina Carpenter",
      cover: "cover2.jpg",
      duration: "3:06",
    },
    {
      id: 3,
      title: "Bad Chem",
      artist: "Sabrina Carpenter",
      cover: "cover3.jpg",
      duration: "2:51",
    },
  ];

  const handleSearch = (query: string) => {
    const filteredResults = tracks.filter((track) =>
      track.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const addToPlaylist = (trackId: number) => {
    const trackToAdd = searchResults.find((track) => track.id === trackId);
    if (trackToAdd && !playlist.some((track) => track.id === trackId)) {
      setPlaylist((prev) => [...prev, trackToAdd]);
    }
  };

  const removeFromPlaylist = (trackId: number) => {
    setPlaylist((prev) => prev.filter((track) => track.id !== trackId));
  };

  return (
    <>
      <h1>PlayListify</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <SearchResults
        searchResults={searchResults}
        onAddToPlaylist={addToPlaylist}
      />
      <h2>Your Playlist</h2>
      <Tracklist
        tracks={playlist}
        onAddToPlaylist={addToPlaylist}
        onRemoveFromPlaylist={removeFromPlaylist}
      />
    </>
  );
}

export default App;
