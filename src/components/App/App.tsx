import { useState } from "react";
import SearchBar from "../Searchbar/Searchbar";
import SearchResults from "../searchresults/Searchresults";
import { Track as TrackType } from "../../types/trackint";
import styles from "./App.module.css";
import Playlist from "../Playlist/Playlist";
import ArtistProfile from "../ArtistProfile/ArtistProfile";
import artistProfile from "../../assets/images/artist_profile.jpg";
/*         <Tracklist
          tracks={playlistTracks}
          onRemoveFromPlaylist={removeFromPlaylist}
        /> */
function App() {
  const [searchResults, setSearchResults] = useState<TrackType[]>([]);
  const [playlistTracks, setPlaylist] = useState<TrackType[]>([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [query, setQuery] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // Sample data for tracks
  const tracks: TrackType[] = [
    {
      id: 1,
      title: "On Purpose",
      artist: "Sabrina Carpenter",
      cover: ArtistProfile,
      duration: "3:58",
      album: "Evolution",
    },

    {
      id: 2,
      title: "Please Please Please",
      artist: "Sabrina Carpenter",
      cover: ArtistProfile.toString(),
      duration: "3:06",
      album: "Singular Act II",
    },
    {
      id: 3,
      title: "Bad Chem",
      artist: "Sabrina Carpenter",
      cover: ArtistProfile.toString(),
      duration: "2:51",
      album: "Evolution",
    },
    {
      id: 4,
      title: "Taste",
      artist: "Sabrina Carpenter",
      cover: ArtistProfile.toString(),
      duration: "2:37",
      album: "Singular Act I",
    },

    {
      id: 5,
      title: "Why",
      artist: "Sabrina Carpenter",
      cover: ArtistProfile.toString(),
      duration: "2:52",
      album: "Singular Act I",
    },
    {
      id: 6,
      title: "Exhale",
      artist: "Sabrina Carpenter",
      cover: ArtistProfile,
      duration: "3:00",
      album: "Singular Act II",
    },
  ];

  const handleSearch = (query: string) => {
    setHasSearched(true);

    if (!query.trim()) {
      setSearchResults([]);

      return;
    }
    const filteredResults = tracks.filter(
      (track) =>
        track.title.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase()) ||
        track.album.toLowerCase().includes(query.toLowerCase())
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

  const saveToSpotify = ({}) => {
    console.log(`${target.value} clicked`);
  };

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>PlayListify</h1>
        </div>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <div className={styles.bodyContainer}>
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
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            onSaveToPlaylist={saveToSpotify}
          />
        </div>
      </div>
    </>
  );
}

export default App;
