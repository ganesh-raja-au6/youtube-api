import React, {useState} from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/login";
import {connect} from 'react-redux'
import {GoogleLogout} from 'react-google-login'

const Navbar = ({user, logout}) => {
  const [use, setUser] = useState("")
  const handleLogin = () => {
    setUser(user)
  }
  const handleLogout = () => {
    console.log('clicked');
    logout()
    setUser(null)
  }
  const logoutFailure = (err) => {
    console.log(err)
  }
  const logoutSuccess = (res) => {
    console.log(res)
  }
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
          {!user ? <li className="nav-item">
            <Link
              className="nav-link btn btn-outline-primary text-primary"
              onClick={handleLogin}
              to="/signup"
            >
              Signup
            </Link>
          </li> : <li className="nav-item">
            <a
              className="nav-link btn btn-outline-danger text-danger"
              onClick = {handleLogout}
            >
              <GoogleLogout
              clientId="1059972440198-0cfi6bqplmp54gvf7q1j20uf7cu4mn0p.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logoutSuccess}
              onLogoutFailure={logoutFailure}
              />
            </a>
          </li>}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user : state.loginReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout : () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
