import { useEffect, useState } from "react";
import SearchBar from "../Searchbar/Searchbar";
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
  const [playlist, setPlaylist] = useState<TrackType[]>([]);
  const [playlistName, setPlaylistName] = useState("");
  const [query, setQuery] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState(false);

  /* Spotify URIs follow this format: spotify:track:{Track_ID} correct example URI: spotify:track:21B4gaTWnTkuSh77iWEXdS */
  // Sample URI array

  // Sample data for tracks
  const tracks: TrackType[] = [
    {
      id: 1,
      title: "On Purpose",
      artist: "Sabrina Carpenter",
      cover: "../../assets/images/artist_profile.jpg",
      duration: "3:58",
      album: "Evolution",
      uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    },

    {
      id: 2,
      title: "Please Please Please",
      artist: "Sabrina Carpenter",
      cover: "../../assets/images/artist_profile.jpg",
      duration: "3:06",
      album: "Singular Act II",
      uri: "spotify:track:1301WleyT98MSxVHPZCA6M",
    },
    {
      id: 3,
      title: "Bad Chem",
      artist: "Sabrina Carpenter",
      cover: "../../assets/images/artist_profile.jpg",
      duration: "2:51",
      album: "Evolution",
      uri: "spotify:track:3n3Ppam7vgaVa1iaRUc9Lp",
    },
    {
      id: 4,
      title: "Espresso",
      artist: "Sabrina Carpenter",
      cover: "../../assets/images/artist_profile.jpg",
      duration: "2:55",
      album: "Espresso",
      uri: "spotify:track:0eGsygTp906u18L0Oimnem",
    },
    {
      id: 5,
      title: "Taste",
      artist: "Sabrina Carpenter",
      cover: "../../assets/images/artist_profile.jpg",
      duration: "2:37",
      album: "Singular Act I",
      uri: "spotify:track:1dNIEtp7AY3oDAKCGg2XkH",
    },

    {
      id: 6,
      title: "Why",
      artist: "Sabrina Carpenter",
      cover: "../../assets/images/artist_profile.jpg",
      duration: "2:52",
      album: "Singular Act I",
      uri: "spotify:track:2TpxZ7JUBn3uw46aR7qd6V",
    },
    {
      id: 7,
      title: "Exhale",
      artist: "Sabrina Carpenter",
      cover: "../../assets/images/artist_profile.jpg",
      duration: "3:00",
      album: "Singular Act II",
      uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
    },
  ];

  /* playlistArray: TrackType[]: Ensures that the input is an array of TrackType objects.
Return Type (string[]): Indicates that the output is an array of strings (URIs). */
  const extractUris = (playlistArray: TrackType[]): string[] => {
    if (!playlistArray || playlistArray.length === 0) {
      console.warn("extractUris called with an empty or undefined array");
      return [];
    } // return early for empty array or undefined case.

    return playlistArray.map((track) => track.uri); // Extract the URI from each track
  };

  const uris = extractUris(tracks);
  console.log(uris); // Use this array to save the playlist or send to Spotify API

  // TypeScript return type annotation (): void () indicates that the function does not take any parameters and void indicates it doesn't return anything.
  const resetPlaylist = (
    setPlaylist: React.Dispatch<React.SetStateAction<TrackType[]>>
  ): void => {
    console.log("Resetting playlist...");
    setPlaylist([]);
  };
  const savePlaylist = (
    playlistArray: TrackType[],
    setPlaylist: React.Dispatch<React.SetStateAction<TrackType[]>>
  ): void => {
    if (!playlistName.trim()) {
      console.warn("Playlist name cannot be empty.");
      return;
    }
    if (!playlistArray || playlistArray.length === 0) {
      console.log("No track to save!");
      return;
    }
    const uris = extractUris(playlistArray);
    console.log(`Saving '${playlistName}' with URIs:`, uris);
    resetPlaylist(setPlaylist);
  };
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
    if (trackToAdd && !playlist.some((track) => track.id === trackId)) {
      setPlaylist((prev) => [...prev, trackToAdd]);
    }
  };

  const removeFromPlaylist = (trackId: number) => {
    setPlaylist((prev) => prev.filter((track) => track.id !== trackId));
  };

  useEffect(() => {
    if (isSaved) {
      const timer = setTimeout(() => setIsSaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSaved]);

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
            tracks={playlist}
            onRemoveFromPlaylist={removeFromPlaylist}
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            savePlaylist={(playlistArray) => {
              savePlaylist(playlistArray, setPlaylist);
              setIsSaved(true);
            }}
            setPlaylist={setPlaylist}
            isSaved={isSaved}
          />
        </div>
      </div>
    </>
  );
}

export default App;
