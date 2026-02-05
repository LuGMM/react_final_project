import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import movieProjection from "../assets/movie-projection.svg";
import { Link } from "react-router-dom";

const Results = () => {
  async function fetchResults(query) {
    setLoading(true);

    const searchResults = await axios.get(
      `https://www.omdbapi.com/?apikey=7ff2cb9c&s=${query}`,
    );
    setResults(searchResults.data.Search);
    setLoading(false);
  }

  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query && query.length === 0) setResults([]);
    else fetchResults(query);
  }, [query]);

  const [sortOption, setSortOption] = useState("DEFAULT");

  function sortResults() {
    if (sortOption === "HIGH_TO_LOW") {
      return results.slice(0, 6).sort((a, b) => b.Year - a.Year);
    } else if (sortOption === "LOW_TO_HIGH") {
      return results.slice(0, 6).sort((a, b) => a.Year - b.Year);
    }
    return results;
  }

  const sortedResults = sortResults();

  return (
    <div className="results_page">
      <div className="search_container">
        <h1 className="search_title">Start Searching</h1>
        <p className="search_description">Enter a title or key word to start</p>
        <div className="search_wrapper">
          <input
            onChange={(event) => setSearching(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setQuery(searching);
                fetchResults(query);
              }
            }}
            type="text"
            placeholder="Title or keyword"
          />
          <button
            onClick={() => {
              setQuery(searching);
              fetchResults(query);
            }}
            className="search_button"
            type="submit"
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
          </button>
        </div>
      </div>
      <div className="search_results_container">
        {results && results.length > 0 ? (
          <>
            <div className="results_header">
              <h2 className="results_title">Search Results</h2>
              <select
                name=""
                id="filter-search"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="DEFAULT">Sort By</option>
                <option value="HIGH_TO_LOW">Year: High to Low</option>
                <option value="LOW_TO_HIGH">Year: Low to High</option>
              </select>
            </div>
            <div className="results_wrapper">
              <div className="results_row">
                {sortedResults.slice(0, 6).map((movie) => (
                  <div className="movie_card_wrapper" key={movie.imdbID}>
                    <Link
                      className="movie_link_card"
                      to={`/movie/${movie.imdbID}`}
                    >
                      <div className="movie_card">
                        <figure className="movie_poster-wrapper">
                          {!movie.Poster || movie.Poster === "N/A" ? (
                            <>
                              <div className="no_poster">
                                No Poster Available
                              </div>
                            </>
                          ) : (
                            <img
                              className="movie_results_poster"
                              src={movie.Poster}
                              alt={movie.Title}
                            />
                          )}
                        </figure>
                        <h3 className="movie_title">{movie.Title}</h3>
                        <p className="movie_year">Release Year: {movie.Year}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {loading | (results && results.length > 0) ? (
          ""
        ) : (
          <figure className="search_results_img-wrapper">
            <img
              className="search_results_img"
              src={movieProjection}
              alt="Movie Projection"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default Results;
