import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faList } from "@fortawesome/free-solid-svg-icons";
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
      <div className={styles.homeContainer}>
        <FontAwesomeIcon
          icon={faHome}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <form onSubmit={handleSubmit} className={styles.searchBarContainer}>
        <input
          id="search-input"
          type="text"
          placeholder="What do you want to play?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchBarInput} // Check this is correct in your CSS file
        />
        <div className={styles.btnContainer}>
          <FontAwesomeIcon icon={faList} />
          <button
            type="submit"
            aria-label="Perform search"
            className={styles.searchBarIcon}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
