import React from "react";

const CommentsForm = () => {
  return (
    <div className="CommentsForm__wrap">
      <form className="CommentsForm__wrap-form" action="">
        {/* <div className="CommentsForm__wrap-form-wrap"> */}
        <div className="CommentsForm__wrap-form-imgWrap">
          <img
            className="CommentsForm__wrap-form-imgWrap-img"
            src="../assets/Images/Mohan-muruge.jpg"
            alt="Mohan-muruge"
          />
        </div>
        <div className="CommentsForm__wrap-form-wordsWrap">
          <h5 className="CommentsForm__wrap-form-wordsWrap-title" htmlFor="">
            JOIN THE CONVERSATION
          </h5>
          <div className="CommentsForm__wrap-form-wordsWrap-textAreaButtonWrap">
            <div className="CommentsForm__wrap-form-wordsWrap-textAreaButtonWrap-textAreaWrap">
              <textarea
                className="CommentsForm__wrap-form-wordsWrap-textAreaButtonWrap-textAreaWrap-textArea"
                type="text"
                placeholder="Add a comment"
              />
            </div>
            <div className="CommentsForm__wrap-form-wordsWrap-textAreaButtonWrap-buttonWrap">
              <button className="button CommentsForm__wrap-wrap-wordsWrap-textAreaButtonWrap-buttonWrap-button">
                COMMENT
              </button>
            </div>
          </div>

          {/* </div> */}
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
