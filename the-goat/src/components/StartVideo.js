import React from 'react';
import "./StartVideo.css";
import VideoContain from "../components/VideoContain";
import { useState } from "react";
import ballon from "../assets/image/ballon-playvideo.png";
import theGoat from "../assets/image/the-goatBG.jpg";

function StartVideo() {
    
      const [content, setContent] = useState(false);
    
      const toggleContent = () => {
        setContent((prevContent) => !prevContent);
      };
    
      return (
        <div className='video'>
            <img className='bgVideo' src={theGoat} alt="" />
            <div className="toogleBtn">
                <img onClick={toggleContent} src={ballon} alt=""/>
                {content && (
                    <>
                     <VideoContain />
                    </>
                )}
            </div>
        </div>
      );
    }
    
    export default StartVideo;