import React from "react";

const NextVideo = props => {
  const NextVideoObj = arr => {
    return arr.map(obj => {
      console.log(obj.image);
      return (
        <>
          <div className="NextVideo__video">
            <div className="NextVideo__video-imgWrap">
              {/* <img src="" alt="" srcset="" /> */}
              <img className="NextVideo__video-imgWrap-img" src={obj.image} />
            </div>
            <div className="NextVideo__video-wordsWrap">
              <h3 className="NextVideo__video-wordsWrap-title">{obj.title}</h3>
              <p className="NextVideo__video-wordsWrap-channel">
                {obj.channel}
              </p>
            </div>
          </div>
        </>
      );
    });
  };
  return <>{NextVideoObj(props.nextVideoArr)}</>;
};

export default NextVideo;
