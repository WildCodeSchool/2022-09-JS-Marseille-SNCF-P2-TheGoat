import React from 'react';
import Larry from "./images/bird-vignette.png";
import Allen from './images/allen-vignette.png';
import './Versus.css';


function Versus3() {
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
                  <br/>
                  <p>Points: 30</p>
                  <br/>
                  <p>3 Points: 15</p>
                  <br/>
                  <p>2 Points: 18</p>
                  <br/>
                  <p>Free Throw % : 85.9</p>
                  <br/>
                  <p>Wins : 14</p>
                  <br/>
                  <p>Loss : 12</p>
                  <br/>
                  <p>Championship : 4</p>
                </div>
                <button className='Vote-versus-legend'>Vote</button>
                
                <div className='Versus-legend'>
                    <div className='Versus-legend-name'>Larry Bird</div>                  
                    <div className='Image-Versus-legend'><img src={Larry} className="playerImg"
                     alt="image des joueurs"/></div>                                             
                </div>
                <div className='Versus-legend1'>
                    <div className='Versus-legend1-name'>Ray Allen</div>                    
                    <div className='Image-Versus-legend1'><img src={Allen} className="playerImg"
                        alt="image des joueurs"/></div>                                               
                </div>
                
                <button className='Vote-versus-legend1'>Vote</button>
                <div className='Versus-legend1-stats'>
                  <h3 className='Stats-h3'>Stats Legend</h3>
                  <br/>
                  <p>Points: 30</p>
                  <br/>
                  <p>3 Points: 15</p>
                  <br/>
                  <p>2 Points: 18</p>
                  <br/>
                  <p>Free Throw % : 85.9</p>
                  <br/>
                  <p>Wins : 14</p>
                  <br/>
                  <p>Loss : 12</p>
                  <br/>
                  <p>Championship : 4</p>
                </div>
            </div>            

          </div>
        </div>
    )
    }
export default Versus3;