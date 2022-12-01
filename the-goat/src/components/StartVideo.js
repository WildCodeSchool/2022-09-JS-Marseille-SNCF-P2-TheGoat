import React from 'react';
import "./StartVideo.css";
import VideoContain from "../components/VideoContain";
import { useState } from "react";
import ballon from "../assets/image/ballon1.png";
import theGoat from "../App.test/image/the-goat.jpg";

function StartVideo() {
    
      const [content, setContent] = useState(false);
    
      const toggleContent = () => {
        setContent((prevContent) => !prevContent);
      };
    
      return (
        <div>
            <img src={theGoat} alt="" />
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