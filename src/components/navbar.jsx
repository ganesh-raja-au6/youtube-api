import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <i className="mx-3 fa fa-bars text-muted" aria-hidden="true"></i>
      <Link className="navbar-brand" to="/">
        <i className="fa fa-youtube-play youtube-icon text-danger" aria-hidden="true"></i>YouTube API <sup>IN</sup>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="w-100">
        <form className="w-50 mx-auto">
          <div className="input-group">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="form-control search"
            />
            <div className="input-group-append">
              <span className="input-group-text search text-muted">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link mx-4 video-upload-icon"
              to="/upload-video"
            >
              <i className="fa fa-video-camera" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn btn-outline-primary text-primary"
              to="/signup"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
