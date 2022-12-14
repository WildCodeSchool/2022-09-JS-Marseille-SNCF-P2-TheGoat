import React from 'react';
import cardImageSrc from "./images/Kevin-Durant-VS.png";
import Steph from './images/Curry-VS.jpg';
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
                <div className='Versus-legend-stats'>
                  <h3 className='Stats-h3'>Stats Legend</h3>
                </div>
                <button className='Vote-versus-legend'>Vote</button>
                <div className='Versus-legend'>                   
                    <div className='Image-Versus-legend'><img src={Steph} className="playerImg"
                     alt="image des joueurs"/></div>                                             
                </div>
                <div className='Versus-legend1'>                    
                    <div className='Image-Versus-legend1'><img src={cardImageSrc} className="playerImg"
                        alt="image des joueurs"/></div>                                               
                </div>
                <button className='Vote-versus-legend1'>Vote</button>
                <div className='Versus-legend1-stats'>
                  <h3 className='Stats-h3'>Stats Legend</h3>
                </div>
            </div>            

          </div>
        </div>
    )
    }
export default Versus;