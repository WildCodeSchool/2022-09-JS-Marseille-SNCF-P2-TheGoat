import React from 'react';
import cardImageSrc from "./images/Kevin-Durant-VS.png";
import './Versus.css';


function Versus() {
    return (
        <div className="Versus">
          <header className="Versus-header">
            <h1 className='Versus-main-title'>Versus</h1>
            <div className='Onegoat'>
              <h2 className='Versus-title'>One G.O.A.T</h2>
              <div className='Versus-subtitle'>
              <p>32 Legends</p>
              <p>First Week</p>
              </div>
            </div>            
          </header>
          <div className='Body-versus'>
            <div className='Versus-legend-container'>
                <div className='Versus-legend'>
                    <div className='Image-Versus-legend'><img src={cardImageSrc} className="playerImg"
                     alt="image des joueurs"/></div>                        
                    
                </div>
                <div className='Versus-legend1'>
                    <div className='Image-Versus-legend1'><img src={cardImageSrc} className="playerImg"
                        alt="image des joueurs"/></div>                        
                    
                </div>
            </div>            

          </div>
        </div>
    )
    }
export default Versus;