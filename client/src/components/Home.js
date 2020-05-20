import React, { Component } from "react";
import HeroVideo from "./HeroVideo";
import HeroDescription from "./HeroDescription";
import CommentsForm from "./CommentsForm";
import Comments from "./Comments";
import NextVideo from "./NextVideo";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// const API_KEY = "?api_key=dcdc0533-06c7-4855-8a2f-a31dfc6d6836";
const url = `http://localhost:5000/api/videos`;

export default class Home extends Component {
  state = {
    counter: 0,
    comments: [],
    videos: [],
    currentVideo: {},
    // allVideos: []
    // currentVideoID: "1af0jruup5gu"
  };

  componentDidMount() {
    console.log("didMount()");
    axios.get(url).then((res) => {
      // console.log(res.data);
      const data = res.data;
      console.log(data);
      axios.get(`${url}/1af0jruup5gu`).then((res) => {
        // console.log(res.data);
        // if()
        this.setState(
          {
            currentVideo: res.data,
            videos: data,
            comments: res.data.comments,
          },
          () => console.log("state mount: ", this.state)
        );
        // console.log(this.state);
      });
      // console.log(this.state);
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("comp did update?");
    console.log("compDidUpdate", prevProps.match.params.id);
    console.log("url param", this.props.match.params.id);

    if (prevProps.match.params.id !== this.props.match.params.id) {
      console.log("video id has changed");
      // console.log(prevProps);
      axios.get(`${url}/${this.props.match.params.id}`).then((res) => {
        // console.log(res.data);
        this.setState({
          currentVideo: res.data,
          comments: res.data.comments,
        });
        // console.log(this.state);
      });
    }
    // console.log("prevState: ", prevState);
    // console.log("current State: ", this.state);
    // if (prevState.videos.length !== this.state.videos.length) {
    // }
  }

  render() {
    console.log("render()");
    console.log(this.state);
    //Make a condition so that
    console.log(this.state.videos);
    if (this.state.videos.length === 0) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Loading...</h2>
        </div>
      );
    }
    // console.log(this.state.currentVideo);
    return (
      <>
        <div className="Home">
          <HeroVideo CurrentVideo={this.state.currentVideo} />
          <div className="App2">
            <div className="App2__leftWrap">
              <HeroDescription CurrentVideo={this.state.currentVideo} />
              <div className="CommentsForm">
                <h2 className="CommentsForm__title">3 Comments</h2>
                <CommentsForm />
              </div>
              <div className="Comments">
                <Comments CurrentVideo={this.state.currentVideo} />
              </div>
            </div>
            <div className="NextVideo">
              <div className="NextVideo__title">NEXT VIDEO</div>
              <NextVideo
                NextVideo={this.state.videos}
                CurrentVideo={this.state.currentVideo}
              />
            </div>
            {/* <Switch>
                <Route
                  path="/videos/:id"
                  render={props => {
                    console.log(props);
                  }}
                />
              </Switch> */}
            {/* render={props => {
                    const id = props.match.params.id;
                    const videos = this.state.videos.find(
                      video => video.id === id
                    );
                    return (
                    <div className="NextVideo">
                      <h2 className="NextVideo__title">NEXT VIDEO</h2>
                      <NextVideo NextVideo={this.state.videos} />
                    </div>;
                    );
                  }} */}
          </div>
        </div>
      </>
    );
  }
}
