import React from "react";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import CommentsForm from "./components/CommentsForm";
import Comments from "./components/Comments";
import HeroDescription from "./components/HeroDescription";
import NextVideo from "./components/NextVideo";

// import NextVideo1 from "../assets/Images/video-list-1.jpg";

// import images from "../public/assets/Images";
// import styles from "main.css";
// import Data from "./scripts/brainflix-example-data";

class App extends React.Component {
  state = {
    // Side Video Object
    sideVideo: [
      {
        id: "type of <string>",
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Bernice Lambert",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-1.jpg`
      },
      {
        id: "type of <string>",
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Bernard Patrick",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-2.jpg`
      },
      {
        id: "type of <string>",
        title: "Travel Health Useful Medical Information For",
        channel: "Lizzie Burton",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-3.jpg`
      },
      {
        id: "type of <string>",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-4.jpg`
      },
      {
        id: "type of <string>",
        title: "Take A Romantic Break In A Boutique Hote",
        channel: "Ethan Owen",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-5.jpg`
      },
      {
        id: "type of <string>",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-6.jpg`
      },
      {
        id: "type of <string>",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-7.jpg`
      },
      {
        id: "type of <string>",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: `${process.env.PUBLIC_URL}/assets/Images/video-list-8.jpg`
      }
    ],

    //Main Video Object
    mainVideo: {
      id: "type of <string>",
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "Red Cow",
      image: "type of <string>",
      views: "1,001,023",
      likes: "110,985",
      duration: "type of <string>",
      video: "type of <string>",
      timestamp: "12/18/2018",
      comments: [
        {
          image: `${process.env.PUBLIC_URL}/assets/Icons/SVG/fb-silhouette-male.jpeg`,
          name: "Micheal Lyons",
          date: "12/18/2018",
          message:
            " They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
          image: `${process.env.PUBLIC_URL}/assets/Icons/SVG/fb-silhouette-male.jpeg`,
          name: "Gary Wong",
          date: "12/18/2018",
          message:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
          image: `${process.env.PUBLIC_URL}/assets/Icons/SVG/fb-silhouette-male.jpeg`,
          name: "Theodore Duncan",
          date: "11/15/2018",
          message:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
        }
      ]
    }
  };

  //dynamic timestamp

  render() {
    return (
      <div className="App">
        <Header />
        <HeroVideo />
        <div className="App2">
          <div className="App2__leftWrap">
            <HeroDescription mainVideoObj={this.state.mainVideo} />
            <div className="CommentsForm">
              <h2 className="CommentsForm__title">3 Comments</h2>
              <CommentsForm />
            </div>
            <div className="Comments">
              <Comments commentsArr={this.state.mainVideo.comments} />
            </div>
          </div>
          <div className="NextVideo">
            <h2 className="NextVideo__title">NEXT VIDEO</h2>
            <NextVideo nextVideoArr={this.state.sideVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
