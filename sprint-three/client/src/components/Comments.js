import React from "react";
import TimeStamp from "./TimeStamp";

const Comments = props => {
  // console.log(props.CurrentVideo);
  const comments = props.CurrentVideo.comments.map(comment => {
    // console.log(comment.id);
    const agoTime = TimeStamp(comment.timestamp);
    return (
      <div className="Comments__comment" key={comment.id}>
        <div className="Comments__comment-imgWrap">
          <img
            className="Comments__comment-imgWrap-img"
            src="../assets/Icons/SVG/fb-silhouette-male.jpeg"
            alt="fb-silhouette-male"
          />
        </div>
        <div className="Comments__comment-wordsWrap">
          <div className="Comments__comment-wordsWrap-nameDate">
            <h4 className="Comments__comment-wordsWrap-nameDate-name">
              {comment.name}
            </h4>
            <p className="Comments__comment-wordsWrap-nameDate-date">
              {/* {comment.timestamp} */}
              {agoTime}
            </p>
          </div>
          <p className="Comments__comment-wordsWrap-description">
            {comment.comment}
          </p>
        </div>
      </div>
    );
  });
  return <div className="Comments">{comments}</div>;
};

export default Comments;
