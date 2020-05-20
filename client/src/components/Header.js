import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <div className="header__logoWrap">
          <img
            className="header__logoWrap-logo"
            src="./../assets/Logo/Logo-brainflix.svg"
            alt="Logo-brainflix"
          />
        </div>
      </Link>

      <div className="header__navWrap">
        <form className="header__navWrap-searchForm" action="/action_page.php">
          <div className="header__navWrap-searchForm-searchWrap">
            <input
              className="header__navWrap-searchForm-searchWrap-searchInput"
              type="text"
              name="search"
              placeholder="Search"
            />
            <img
              className="header__navWrap-searchForm-searchWrap-searchInput-img"
              src="./../assets/Icons/SVG/Icon-search.svg"
              alt=""
            />
          </div>
          <div className="header__navWrap-searchForm-buttonImgWrap">
            <div className="button__wrap header__navWrap-searchForm-buttonImgWrap-buttonWrap">
              <Link to="/upload">
                <button
                  className="button header__navWrap-searchForm-buttonImgWrap-buttonWrap-button"
                  type="submit"
                >
                  <i className="fa fa-search"></i>
                  <span className="header__navWrap-searchForm-buttonImgWrap-buttonWrap-button-buttonPlus">
                    +
                  </span>
                  UPLOAD
                </button>
              </Link>
            </div>
            <div className="header__navWrap-searchForm-buttonImgWrap-imgWrap">
              <img
                className="header__navWrap-searchForm-buttonImgWrap-imgWrap-img "
                src="../assets/Images/Mohan-muruge.jpg"
                alt="Mohan-muruge"
              />
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
