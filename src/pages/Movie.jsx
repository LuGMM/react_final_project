import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  async function fetchMovieDetails() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=7ff2cb9c&i=${id}&plot=full`,
    );
    setMovieInfo(data);
  }

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="movie_container">
      <div className="movie_information">
        <div className="poster_wrapper">
          <figure>
            {movieInfo.Poster && movieInfo.Poster !== "N/A" ? (
              <img src={movieInfo.Poster} alt={movieInfo.Title} />
            ) : (
              <p className="missing_poster">No Poster Available</p>
            )}
          </figure>
        </div>
        <div className="movie_info-wrapper">
          <h1 className="movie_info_title">{movieInfo.Title}</h1>
          <p className="movie_info movie_info_year">
            <span className="bold">Year:</span> {movieInfo.Year}
          </p>
          <p className="movie_info movie_info_rated">
            <span className="bold">Rated:</span> {movieInfo.Rated}
          </p>
          <p className="movie_info movie_info_genre">
            <span className="bold">Genre:</span> {movieInfo.Genre}
          </p>
          <p className="movie_info movie_info_director">
            <span className="bold">Director:</span> {movieInfo.Director}
          </p>
          <p className="movie_info movie_info_actors">
            <span className="bold">Actors:</span> {movieInfo.Actors}
          </p>
          <p className="movie_info movie_info_imdb">
            <span className="bold">IMDB Rating:</span> {movieInfo.imdbRating}
          </p>
        </div>
      </div>
      <div className="movie_summary">
        <p className="movie_info movie_info_plot">
          <span className="bold">Plot summary:</span> {movieInfo.Plot}
        </p>
      </div>
    </div>
  );
};

export default Movie;
