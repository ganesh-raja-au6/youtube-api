import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {setVideos} from '../redux/actions/videoActions'
import Videos from '../components/Videos'

class Home extends Component {
  componentDidMount(){
    return this.props.videos('telugu')
  }
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    // return (<Videos videosList={this.props.videosList} />)
    return this.props.videosList ? (<Videos videosList={this.props.videosList} />) : <h3>Loading</h3>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    videosList : state.videoReducer.videos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    videos : (search) => dispatch(setVideos(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
