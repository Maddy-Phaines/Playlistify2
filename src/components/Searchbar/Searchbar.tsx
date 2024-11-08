import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faList } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (query: string) => void;
}

function SearchBar({ query, setQuery, onSearch }: SearchBarProps) {
  const handleSearchButtonClick = () => {
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
          <form>
            {/* Search Input */}
            <input
              className={styles["search-bar-input"]}
              type="text"
              placeholder="What do you want to play?"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update the query state variable's value with the user input as it's typed. Keeps 'query' in sync with input
            />
          </form>
          {/* Divider */}
          <div className={styles["search-bar-divider"]}></div>
          <FontAwesomeIcon icon={faList} />
          {/* Search Icon */}
          <button onClick={handleSearchButtonClick}>
            <FontAwesomeIcon
              icon={faSearch}
              className={styles["search-bar-icon"]}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
