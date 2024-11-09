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
    <>
      <div className={styles.searchContainer}>
        <div className={styles.homeContainer}>
          {/* Home Icon */}
          <FontAwesomeIcon
            icon={faHome}
            style={{ color: "#ccc", fontSize: "18px" }}
            className={styles["search-bar-home"]}
          />
        </div>
        <div className={styles["search-bar-container"]}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="search-input" className={styles.visuallyHidden}>
              Search
            </label>
            {/* Search Input */}
            <input
              id="search-input"
              className={styles["search-bar-input"]}
              type="text"
              placeholder="What do you want to play?"
              aria-label="Search music and podcasts"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              // Update the query state variable's value with the user input as it's typed. Keeps 'query' in sync with input
            />

            {/* Divider */}
            <div className={styles["search-bar-divider"]}></div>
            <FontAwesomeIcon icon={faList} />
            {/* Search Icon */}
            <button type="submit" aria-label="Perform search">
              <FontAwesomeIcon
                icon={faSearch}
                className={styles["search-bar-icon"]}
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
