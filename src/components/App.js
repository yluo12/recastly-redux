import React, { useState, useEffect } from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

function App({ API_KEY, searchYouTube }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([])

  const handleVideoListEntryTitleClick = (video) => {
    setCurrentVideo(video);
  }

  const getYouTubeVideos = (query) => {
    var options = {
      key: API_KEY,
      query: query
    };

    searchYouTube(options, (videos) => {
      setVideos(videos);
      setCurrentVideo(videos[0])
    });
  }
  
   useEffect(function () {
    getYouTubeVideos('react tutorials');
  }, []);

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search getYouTubeVideos={getYouTubeVideos}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
            videos={videos}
          />
        </div>
      </div>
    </div>
  );  
}

export default App;
