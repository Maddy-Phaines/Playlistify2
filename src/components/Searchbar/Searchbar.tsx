import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Searchbar.module.css";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (query: string) => void;
}

function SearchBar({ query, setQuery, onSearch }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.homeIcon}>
          <FontAwesomeIcon
            icon={faHome}
            style={{ color: "white", fontSize: "18px" }}
          />
        </div>
        <input
          id="search-input"
          type="text"
          placeholder="What do you want to play?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchBar} // Check this is correct in your CSS file
        />

        <button
          type="submit"
          aria-label="Perform search"
          className={styles.searchBarIcon}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
