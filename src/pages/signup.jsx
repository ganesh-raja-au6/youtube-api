import React from "react";
import { GoogleLogin } from "react-google-login";

const Signup = (props) => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
    // <GoogleLogin
    //   clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    //   render={(renderProps) => (
    //     <div
    //       onClick={renderProps.onClick}
    //       disabled={renderProps.disabled}
    //       className="google-btn"
    //     >
    //       <i className="fa fa-google google-login-icon text-primary "></i>
    //       <button className="">Continue with Google</button>
    //     </div>
    //   )}
    //   buttonText="Login"
    //   onSuccess={responseGoogle}
    //   onFailure={responseGoogle}
    //   cookiePolicy={"single_host_origin"}
    // />
  );
};

export default Signup;
