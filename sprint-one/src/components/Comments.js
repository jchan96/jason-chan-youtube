import React from "react";

const Comments = props => {
  const commentObj = arr => {
    return arr.map(obj => {
      return (
        <>
          <div className="Comments__comment">
            <div className="Comments__comment-imgWrap">
              <img
                className="Comments__comment-imgWrap-img"
                src={obj.image}
                alt=""
              />
            </div>
            <div className="Comments__comment-wordsWrap">
              <div className="Comments__comment-wordsWrap-nameDate">
                <h4 className="Comments__comment-wordsWrap-nameDate-name">
                  {obj.name}
                </h4>
                <p className="Comments__comment-wordsWrap-nameDate-date">
                  {obj.date}
                </p>
              </div>
              <p className="Comments__comment-wordsWrap-description">
                {obj.message}
              </p>
            </div>
          </div>
        </>
      );
    });
  };
  return <>{commentObj(props.commentsArr)}</>;
};

export default Comments;
