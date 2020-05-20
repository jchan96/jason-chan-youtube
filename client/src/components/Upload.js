import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import uploadPhoto from "../assets/Images/video-list-0.jpg";

class Uploads extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    axios.get("/api/videos").then((res) => {
      this.setState({
        videos: res.data,
      });
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/videos/upload", {
        title: event.target.title.value,
        description: event.target.description.value,
        image: uploadPhoto,
      })
      .then((res) => {
        this.setState({
          videos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    event.target.reset();
  };

  render() {
    if (!this.state.videos) {
      return <p>Loading</p>;
    }
    const videos = this.state.videos.map((video) => {
      return (
        <li key={video.id} className="video-list__item">
          <h3>{video.title}</h3>
          {/* <img src={video.imageUrl} alt={video.title} /> */}
        </li>
      );
    });

    return (
      // <h1>hi</h1>
      // <Link to="/upload">
      <div className="Upload">
        <h1 className="Upload__title">Upload Video</h1>
        <form className="Upload__form" onSubmit={this.handleFormSubmit}>
          <label className="Upload__form-thumbnailLabel">VIDEO THUMBNAIL</label>
          <img className="Upload__form-img" src="" alt="" />
          <label className="Upload__form-videoTitle">TITLE YOUR VIDEO</label>
          <input
            name="title"
            className="Upload__form-inputVideo"
            placeholder="Add a title to your video"
          />
          <label className="Upload__form-uploadDescription">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            className="Upload__form-inputDescription"
            placeholder="Add a description of your video"
          ></textarea>
          <button type="submit" className="Upload__form-publishButton">
            PUBLISH
          </button>
          <button className="Upload__form-cancelButton">CANCEL</button>
        </form>
      </div>
      // </Link>
    );
  }
}

export default Uploads;
