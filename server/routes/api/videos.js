// // include express in order to use methods like .Router()
const express = require("express");
// // reference to the videos file in order to write using writeJSONFile
const videosFile = __dirname + "/../../models/videos.json";
// // work with array of data from videos
const videos = require(videosFile);
// // helper functions: writeJSONFile & getNewId
const helper = require("../../helper/helper");
// // setup express router
const router = express.Router();

// // /**
// //  * Get all the videos but with fewer properties/keys
// //  */
router.get("/", (req, res) => {
  const videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title
      // imageUrl: video.imageUrl
    };
  });
  res.json(videoList);
});

// // /**
// //  * Get video by id
// //  */
router.get("/:id", (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    res.json(videos.filter(video => video.id === req.params.id)[0]);
  } else {
    res
      .status(400)
      .json({ errorMessage: `video with ID:${req.params.id} not found` });
  }
});

// /**
//  * Post new video
// //  */
router.post("/upload", (req, res) => {
  const newvideo = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    image: "./../../assets/Images/Mohan-muruge.jpg"
    // comments: []
  };
  if (!newvideo.title || !newvideo.description) {
    return res.status(400).json({
      errorMessage:
        "Please provide title, description, and imageUrl for the video"
    });
  }
  videos.push(newvideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(videos);
});

// // /**
// //  *  update video with :id
// //  */
// // router.put("/:id", (req, res) => {
// //   const found = videos.some(video => video.id === req.params.id);
// //   if (found) {
// //     videos.forEach(video => {
// //       if (video.id === req.params.id) {
// //         video.title = req.body.title ? req.body.title : video.title;
// //         video.description = req.body.description
// //           ? req.body.description
// //           : video.description;
// //         video.imageUrl = req.body.imageUrl ? req.body.imageUrl : video.imageUrl;
// //       }
// //     });
// //     helper.writeJSONFile(videosFile, videos);
// //     res.json({ msg: "video Updated", videos: videos });
// //   } else {
// //     res
// //       .status(404)
// //       .json({ errorMessage: `video with ID: ${req.params.id} not found` });
// //   }
// // });

// // /**
// //  * Delete video
// //  */
// // router.delete("/:id", (req, res) => {
// //   const found = videos.some(video => video.id === req.params.id);
// //   if (found) {
// //     const videosAfterDeletion = videos.filter(
// //       video => video.id !== req.params.id
// //     );
// //     helper.writeJSONFile(videosFile, videosAfterDeletion);
// //     res.json({
// //       msg: `video with ID: ${req.params.id} Deleted`,
// //       videos: videosAfterDeletion
// //     });
// //   } else {
// //     res
// //       .status(404)
// //       .json({ errorMessage: `video with ID: ${req.params.id} not found` });
// //   }
// // });

module.exports = router;
