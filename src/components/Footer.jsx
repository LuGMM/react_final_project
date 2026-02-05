import React from "react";
import logo from "../assets/movie-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <figure className="footer_logo">
          <Link to="/">
            <img className="movies_logo" src={logo} alt="movie logo" />
          </Link>
        </figure>
        <div className="footer_text">Created by Luis Martinez</div>
      </div>
    </footer>
  );
};

export default Footer;
