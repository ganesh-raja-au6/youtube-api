import React from "react";
import { connect } from "react-redux";
import { Redirect, Switch } from "react-router-dom";

const Profile = ({ user }) => {
  if (user === null) {
    return (
      <Switch>
        <Redirect to="/signup"></Redirect>
      </Switch>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Welcome {user.name}</h2>
            </div>
            <div className="card-body">
              <div className="w-100">
                <img
                  src={user.picture}
                  alt={user.given_name}
                  className="img-fluid img-thumbnail mx-auto d-block"
                />
              </div>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>user</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>firstName</td>
                    <td>{user.given_name}</td>
                  </tr>
                  <tr>
                    <td>lastName</td>
                    <td>{user.family_name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      {user.email}{" "}
                      <span
                        className={
                          user.email_verified ? "text-success" : "text-danger"
                        }
                      >
                        verified
                      </span>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
