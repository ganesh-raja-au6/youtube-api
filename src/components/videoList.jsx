import React from "react";

const description = (description, length) => {
    return description.length <= length ? description : `${description.slice(0, length)}...`
}

const VideoList = ({ video }) => {
  return (
    <div className="card">
      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
      <div className="card-body">
        <h3> {video.snippet.title} </h3>
        <p>{description(video.snippet.description, 50)}</p>
      </div>
    </div>
  );
};

export default VideoList;
