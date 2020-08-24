import React from "react";
import { GoogleLogin } from "react-google-login";
import { OAuth2Client } from "google-auth-library";
import { login } from "../redux/actions/login";
import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'

const Signup = ({login, history, user, logout}) => {
  const responseGoogle = (response) => {
    console.log(response)
    const client = new OAuth2Client(
      "1059972440198-0cfi6bqplmp54gvf7q1j20uf7cu4mn0p.apps.googleusercontent.com"
    );
    client
      .verifyIdToken({
        idToken: response.tokenId,
        audience:
          "1059972440198-0cfi6bqplmp54gvf7q1j20uf7cu4mn0p.apps.googleusercontent.com",
      })
      .then((resp) => {
        login(resp.payload)
        history.push("/profile")
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="1059972440198-0cfi6bqplmp54gvf7q1j20uf7cu4mn0p.apps.googleusercontent.com"
      buttonText="Login with Google."
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
      cookiePolicy={"single_host_origin"}
      scope="https://www.googleapis.com/auth/youtube"
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};


export default connect(null, mapDispatchToProps)(Signup);
