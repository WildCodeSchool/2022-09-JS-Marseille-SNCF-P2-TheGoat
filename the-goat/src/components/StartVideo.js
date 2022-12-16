import React from 'react';
import "../components/StartVideo.css";
import VideoContain from "../components/VideoContain";
import { useState } from "react";
import ballon from "../assets/image/ballon-playvideo.png";


function StartVideo() {
    
      const [content, setContent] = useState(false);
    
      const toggleContent = () => {
        setContent((prevContent) => !prevContent);
      };
    
      return (
        
          <>
            <div className="toogleBtn">
                <img onClick={toggleContent} src={ballon} alt=""/>
                {content && (
                    
                     <VideoContain />
                    
                )}
            </div>
          </>
      );
    }
    
    export default StartVideo;