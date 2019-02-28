import React from 'react';

const videoDetails = ({video}) => {

  if(!video){
    return <div>...Loading</div>
  }
  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;
    return (
      <div className="video-details">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe title="videoPlayer" className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="details">

            <div className="description">{video.snippet.title}</div>
            <div className="description">{video.snippet.description}</div>
          </div>
      </div>
    )
}

export default videoDetails;