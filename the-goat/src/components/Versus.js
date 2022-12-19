import React from 'react';
import Kevin from "./images/durant.png";
import Steph from './images/curry-vignette.png';
import './Versus.css';
import Header from './Header';


function Versus() {
    return (
        <div className="Versus">
          <Header/>
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
                    <div className='Versus-legend-name'>Stephen Curry</div>                  
                    <div className='Image-Versus-legend'><img src={Steph} className="playerImg"
                     alt="image des joueurs"/></div>                                             
                </div>
                <div className='Versus-legend1'>
                    <div className='Versus-legend1-name'>Kevin Durant</div>                    
                    <div className='Image-Versus-legend1'><img src={Kevin} className="playerImg"
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
export default Versus;