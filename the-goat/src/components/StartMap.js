import React from 'react';
import "../components/Teams.css";
import Map from "../components/Map";
import { useState } from "react";
import logo from "../assets/image/04_maps.png";


function StartMap() {
    
      const [content, setContent] = useState(false);
    
      const toggleContent = () => {
        setContent((prevContent) => !prevContent);
      };
    
      return (
        
          <>
           
                <img className='MapButton' onClick={toggleContent} src={logo} alt=""/>
                {content && (
                    
                     <Map />
                    
                )}
                
            
          </>
      );
    }
    
export default StartMap;