import React from "react";
import { GoogleLogout } from "react-google-login";

import { logout } from "../redux/actions/userActions";

import { keys } from "../config.js";
import { connect } from "react-redux";

const Logout = ({ logout }) => {
  const handleLogout = (res) => {
    alert("successfully signed out.");
    logout();
  };
  const handleFailure = (err) => {
    console.log("err", err);
  };
  return (
    <GoogleLogout
      clientId={keys.GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={handleLogout}
      onLogoutFailure={handleFailure}
    ></GoogleLogout>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
