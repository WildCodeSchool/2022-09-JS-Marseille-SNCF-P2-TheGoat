import React from 'react';

const VideoContain = () => {
    const handleClick = event => {
        // 👇️ refers to the video element
        console.log(event.target);
    
        console.log('video clicked');
      };
    
      return (
        <div>
          <img
            src="https://the-goat/src/assets/video/espn_nba_2022_-_rebrand.mp4"
            alt="Movie Nba"
            onClick={handleClick}
          />
        </div>
      );
    };
    


export default VideoContain;