import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/movie-logo.png";

const Header = () => {
  return (
    <header>
      <div className="nav_row">
        <nav>
          <figure className="nav_logo">
            <Link className="nav_brand" to="/">
              <img className="movies_logo" src={logo} alt="Logo" />
            </Link>
          </figure>
          <div>
            <h1 className="nav_title">Movie Explorer</h1>
          </div>

          <div className="nav_links">
            <Link className="nav_link" to="/">
              Home
            </Link>
            <Link className="nav_link" to="/search">
              Search
            </Link>
            <Link className="nav_link" to="/about">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
