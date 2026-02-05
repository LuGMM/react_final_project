import React from "react";
import theaterScreen from "../assets/theater.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_container">
      <span className="home_span"></span>
      <div className="home_row">
        <h2 className="home_title">Welcome to Movie Explorer</h2>
        <p className="home_description">
          Discover and explore a vast collection of movies!
        </p>
        <div className="input_wrapper">
          <Link className="play_button-link" to="/search">
            <FontAwesomeIcon className="play_button" icon={faPlay} />
          </Link>
          Click the play button to start searching!
        </div>
      </div>
      <span className="home_span"></span>
      <div className="theater_screen">
        <img
          className="theater_screen-img"
          src={theaterScreen}
          alt="Theater Screen"
        />
      </div>
    </div>
  );
};

export default Home;
