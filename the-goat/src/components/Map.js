import React from 'react';
import './Team.css';

import MapImg from '../assets/nba-map.jpg';
import { useState } from "react";


function Map(){
  const [content, setContent] = useState(false);
    
  const toggleContent = () => {
    setContent((prevContent) => !prevContent);
  };

  return (
    
        
        <div className="toggleBtn">
            <button className='Map2' onClick={toggleContent} alt="">
            {content && (
                <img className='Map1' src={MapImg}  alt=''/>
            )}
           Look at the Map !</button>
        </div>
    
  );
}

export default Map;