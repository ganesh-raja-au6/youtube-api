import React, { Fragment } from "react";
import VideoList from "./videoList";
import { connect } from "react-redux";

const Videos = ({ videosList }) => {
  //   if (videosList) {
  return (
    <div className="container">
      <div>
        <Fragment>
          {videosList.items.map((video) => (
            <VideoList key={video.id} video={video} />
          ))}
        </Fragment>
      </div>
    </div>
  );
  //   }else{
  //       return (
  //           <h2>Hi</h2>
  //       )
  //   }
};

export default connect()(Videos);
