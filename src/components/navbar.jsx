import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

import Logout from './Logout'

const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Youtube
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
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
              className="form-control"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {!user ? <li className="nav-item">
            <Link className="nav-link" to="/login">
              <button className="btn btn-outline-primary">Login</button>
            </Link>
          </li> : <li className="nav-item">
            <Link className="nav-link" to="/login">
              <Logout />
            </Link>
          </li>}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps)(Navbar);
