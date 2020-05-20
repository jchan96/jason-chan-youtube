import React from "react";
import uploadPhoto from "../assets/Images/video-list-0.jpg";

const HeroVideo = (props) => {
  // const API_KEY = "?api_key=774cfc48-add0-419a-b447-5dddabab1567";

  // console.log(props);
  // <Link to="">
  // console.log(props.CurrentVideo);
  return (
    <section className="hero__videoWrap">
      <video
        className="hero__videoWrap-video"
        poster={props.CurrentVideo.image}
        controls
      >
        <source src={props.CurrentVideo.video} />
      </video>
    </section>
  ); //{" "}
  // </Link>;
  // });
  // return <div>{currentVideo}</div>;
};

export default HeroVideo;
