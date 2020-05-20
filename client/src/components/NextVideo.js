import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const NextVideo = (props) => {
  // console.log(props);
  // console.log(props.NextVideo[0].channel);
  const videos = props.NextVideo.map((video) => {
    // console.log("vid map", video.id);
    // console.log(props.video);
    // const remove = props.NextVideo.filter(video => video.id ===);
    if (video.id !== props.CurrentVideo.id) {
      return (
        <Link to={`/videos/${video.id}`} key={video.id}>
          <div className="NextVideo__video" key={video.id}>
            {/* <div className="NextVideo__title"></div> */}
            {/* <div className="NextVideo__video"> */}
            <div className="NextVideo__video-imgWrap">
              <img
                className="NextVideo__video-imgWrap-img"
                src={video.image}
                alt={video.title}
              />
            </div>
            <div className="NextVideo__video-wordsWrap">
              <h3 className="NextVideo__video-wordsWrap-title">
                {video.title}
              </h3>
              <p className="NextVideo__video-wordsWrap-channel">
                {video.channel}
              </p>
            </div>
          </div>
        </Link>
      );
    }
  });
  return <div className="NextVideos">{videos}</div>;
  // return;
};

export default NextVideo;
