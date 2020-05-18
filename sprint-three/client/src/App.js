import React from "react";
import Header from "./components/Header";
import Upload from "./components/Upload";
// import HeroVideo from "./components/HeroVideo";
// import CommentsForm from "./components/CommentsForm";
// import Comments from "./components/Comments";
// import HeroDescription from "./components/HeroDescription";
// import NextVideo from "./components/NextVideo";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import axios from "axios";

// import NextVideo1 from "../assets/Images/video-list-1.jpg";

// import images from "../public/assets/Images";
// import styles from "main.css";
// import Data from "./scripts/brainflix-example-data";

// {
//     "api_key": "dcdc0533-06c7-4855-8a2f-a31dfc6d6836"
// }

class App extends React.Component {
  render() {
    // const {}
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/videos/:id" component={Home} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
