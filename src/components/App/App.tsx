import { useState } from "react";
import SearchBar from "../Searchbar/Searchbar";
import Tracklist from "../Tracklist/Tracklist";
import SearchResults from "../searchresults/Searchresults";
import { Track as TrackType } from "../../types/trackint";
import styles from "./App.module.css";
import Playlist from "../Playlist/Playlist";
/*         <Tracklist
          tracks={playlistTracks}
          onRemoveFromPlaylist={removeFromPlaylist}
        /> */
function App() {
  const [searchResults, setSearchResults] = useState<TrackType[]>([]);
  const [playlistTracks, setPlaylist] = useState<TrackType[]>([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [query, setQuery] = useState<string>("");
  const [playListNameQuery, setPlaylistNameQuery] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // Sample data for tracks
  const tracks: TrackType[] = [
    {
      id: 1,
      title: "Taste",
      artist: "Sabrina Carpenter",
      cover: "cover1.jpg",
      duration: "2:37",
      album: "Singular Act I",
    },
    {
      id: 2,
      title: "Please Please Please",
      artist: "Sabrina Carpenter",
      cover: "cover2.jpg",
      duration: "3:06",
      album: "Singular Act II",
    },
    {
      id: 3,
      title: "Bad Chem",
      artist: "Sabrina Carpenter",
      cover: "cover3.jpg",
      duration: "2:51",
      album: "Evolution",
    },
    {
      id: 4,
      title: "On Purpose",
      artist: "Sabrina Carpenter",
      cover: "cover4.jpg",
      duration: "3:58",
      album: "Evolution",
    },
    {
      id: 5,
      title: "Why",
      artist: "Sabrina Carpenter",
      cover: "cover5.jpg",
      duration: "2:52",
      album: "Singular Act I",
    },
    {
      id: 6,
      title: "Exhale",
      artist: "Sabrina Carpenter",
      cover: "cover6.jpg",
      duration: "3:00",
      album: "Singular Act II",
    },
  ];

  const handleSearch = (query: string) => {
    setHasSearched(true);
    const filteredResults = tracks.filter((track) =>
      track.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const addToPlaylist = (trackId: number) => {
    const trackToAdd = searchResults.find((track) => track.id === trackId);
    if (trackToAdd && !playlistTracks.some((track) => track.id === trackId)) {
      setPlaylist((prev) => [...prev, trackToAdd]);
    }
  };

  const removeFromPlaylist = (trackId: number) => {
    setPlaylist((prev) => prev.filter((track) => track.id !== trackId));
  };

  const handlePlaylistName = (playListName: string) => {};

  return (
    <>
      <div className={styles.appContainer}>
        <h1 className={styles.header}>PlayListify</h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <SearchResults
          songs={tracks}
          searchResults={searchResults}
          onAddToPlaylist={addToPlaylist}
          hasSearched={hasSearched}
          topArtist={searchResults[0]} // make sure there's a condition that searchResults is not empty
        />
        <Playlist
          tracks={playlistTracks}
          onRemoveFromPlaylist={removeFromPlaylist}
          onSetPlaylistName={handlePlaylistName}
          query={playListNameQuery}
        />
      </div>
    </>
  );
}

export default App;
