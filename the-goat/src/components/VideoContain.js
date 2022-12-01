import React from 'react';
import YouTube from 'react-youtube';
import "./VideoContain.css";

class VideoContain extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube className='video-item' videoId="q1XiTZzIKpg" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default VideoContain;