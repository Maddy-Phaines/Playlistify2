import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Tracklist from "../Tracklist/Tracklist";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [query, setQuery] = useState("");

  // Sample data for tracks (this could also come from an API call)
  const tracks = [
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
  const handleSearch = (query) => {
    const filteredResults = tracks.filter((track) =>
      track.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const addToPlaylist = (trackId) => {
    const trackToAdd = searchResults.find((track) => track.id === trackId);
    if (trackToAdd && !playlist.find((track) => track.id === trackId)) {
      setPlaylist((prevPlaylist) => [...prevPlaylist, trackToAdd]);
    }
  };

  const removeFromPlaylist = (trackId) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((track) => track.id !== trackId)
    );
  };

  return (
    <>
      <h1>PlayListify</h1>
      {/* Search bar that handles search on input */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />{" "}
      {/* Search Results Section */}
      <SearchResults
        searchResults={searchResults}
        onAddToPlaylist={addToPlaylist}
      />
      {/* Playlist section */}
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
