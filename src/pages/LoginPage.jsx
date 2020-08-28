import React from "react";
import { GoogleLogin } from "react-google-login";
import { keys } from "../config.js";
import {Redirect} from 'react-router-dom'

import {setUser} from "../redux/actions/userActions"
import { connect } from "react-redux";

const Login = ({user, setUser}) => {
  const responseGoogle = (response) => {
    if(response.error) {
      return console.error(response.error)
    }
    setUser({...response.objectId, ...response.tokenObj})
  };
  if(user) return <Redirect to="/" />
  return (
    <div className="row">
      <div className="w-100 mt-5 col-6 offset-3">
        <div className="w-25 mx-auto mt-5">
          <GoogleLogin
            clientId={keys.GOOGLE_CLIENT_ID}
            isSignedIn={true}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            scope="https://www.googleapis.com/auth/youtube"
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user : state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser : (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
