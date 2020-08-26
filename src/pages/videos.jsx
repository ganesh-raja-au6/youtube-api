import React, {useState} from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchVideos } from "../redux/actions/search";

const Videos = ({ searchList, fetchList, getVideos }) => {
    console.log(getVideos)
    const [v, sv] = useState("pr-4GbR4DpQ")
  if (searchList) {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBGmJzSy2jpxP8xC-oziijTKNuX9wDTAls&q=${searchList}`
      )
      .then((data) => {
          console.log(data)
        fetchList(data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="row">
      <div className="col-8">
          <iframe src={"https://www.youtube.com/watch?reload=9&v="+v} title={v} frameborder="0"></iframe>
      </div>
      <div className="col-4">
        {getVideos && <ul>
          {getVideos.data.items.map((video) => (
            <li onClick={(video)=> sv(video.id)} key={video.id}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={ "nothing"}
                        alt={ "nothing"}
                      />
                    </div>
                    <div className="col-9">
                      <h3>{video.title}</h3>
                      <p>Views : { "nothing"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    searchList: state.searchReducer.search,
    getVideos: state.searchReducer.videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: (data) => dispatch(fetchVideos(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
