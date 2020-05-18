import React from "react";
import TimeStamp from "./TimeStamp";

const HeroDescription = props => {
  // console.log(props);
  let agoTime = TimeStamp(props.CurrentVideo.timestamp);
  return (
    <div className="HeroDescription">
      <h1 className="HeroDescription__title">{props.CurrentVideo.title}</h1>
      <div className="HeroDescription__byDateViewsLikes">
        <div className="HeroDescription__byDateViewsLikes-byDate">
          <h4 className="HeroDescription__byDateViewsLikes-byDate-by">
            By {props.CurrentVideo.channel}
          </h4>
          <p className="HeroDescription__byDateViewsLikes-byDate-date">
            {/* {props.CurrentVideo.timestamp} */}
            {agoTime}
          </p>
        </div>
        <div className="HeroDescription__byDateViewsLikes-viewsLikes">
          <div className="HeroDescription__byDateViewsLikes-viewsLikes-views">
            <div className="HeroDescription__byDateViewsLikes-viewsLikes-views-imgWrap">
              <img
                className="HeroDescription__byDateViewsLikes-viewsLikes-views-imgWrap-img"
                src="../assets/Icons/SVG/Icon-views.svg"
                alt={props.CurrentVideo.title}
              />
            </div>
            <div className="HeroDescription__byDateViewsLikes-viewsLikes-views-number">
              {props.CurrentVideo.views}
            </div>
          </div>
          <div className="HeroDescription__byDateViewsLikes-viewsLikes-likes">
            <div className="HeroDescription__byDateViewsLikes-viewsLikes-likes-imgWrap">
              <img
                className="HeroDescription__byDateViewsLikes-viewsLikes-likes-imgWrap-img"
                src="../assets/Icons/SVG/Icon-likes.svg"
                alt=""
              />
            </div>
            <div className="HeroDescription__byDateViewsLikes-viewsLikes-likes-number">
              {props.CurrentVideo.likes}
            </div>
          </div>
        </div>
      </div>
      <div className="HeroDescription__description">
        {props.CurrentVideo.description}
      </div>
    </div>
  );
};

export default HeroDescription;
