import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {fetchVideos} from '../redux/actions/search'

const Videos = ({ searchList, fetchList }) => {
    if(searchList) {
        axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBGmJzSy2jpxP8xC-oziijTKNuX9wDTAls&q=${searchList}`
      )
      .then((data) => {
          fetchList(data.data.items)
      })
      .catch((err) => console.log(err));
    }
//   fetch(
//     `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBGmJzSy2jpxP8xC-oziijTKNuX9wDTAls&q=${searchList}`,
//     { method: "GET" }
//   )
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
  return <p>Hi</p>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    searchList: state.searchReducer.search,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: (data) => dispatch(fetchVideos(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
