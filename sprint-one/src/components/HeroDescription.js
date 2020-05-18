import React from "react";

const HeroDescription = prop => {
  return (
    <>
      <div className="HeroDescription">
        <h1 className="HeroDescription__title">{prop.mainVideoObj.title}</h1>
        <div className="HeroDescription__byDateViewsLikes">
          <div className="HeroDescription__byDateViewsLikes-byDate">
            <h4 className="HeroDescription__byDateViewsLikes-byDate-by">
              By {prop.mainVideoObj.channel}
            </h4>
            <p className="HeroDescription__byDateViewsLikes-byDate-date">
              {prop.mainVideoObj.timestamp}
            </p>
          </div>
          <div className="HeroDescription__byDateViewsLikes-viewsLikes">
            <div className="HeroDescription__byDateViewsLikes-viewsLikes-views">
              <div className="HeroDescription__byDateViewsLikes-viewsLikes-views-imgWrap">
                <img
                  className="HeroDescription__byDateViewsLikes-viewsLikes-views-imgWrap-img"
                  src="./assets/Icons/SVG/Icon-views.svg"
                  alt=""
                />
              </div>
              <div className="HeroDescription__byDateViewsLikes-viewsLikes-views-number">
                {prop.mainVideoObj.views}
              </div>
            </div>
            <div className="HeroDescription__byDateViewsLikes-viewsLikes-likes">
              <div className="HeroDescription__byDateViewsLikes-viewsLikes-likes-imgWrap">
                <img
                  className="HeroDescription__byDateViewsLikes-viewsLikes-likes-imgWrap-img"
                  src="./assets/Icons/SVG/Icon-likes.svg"
                  alt=""
                />
              </div>
              <div className="HeroDescription__byDateViewsLikes-viewsLikes-likes-number">
                {prop.mainVideoObj.likes}
              </div>
            </div>
          </div>
        </div>
        <div className="HeroDescription__description">
          {prop.mainVideoObj.description}
        </div>
      </div>
    </>
  );
};

export default HeroDescription;
