import React from 'react';
import './Games.css';
import cardImageSrc from "./images/curry-vignette.png";


function Games() {
    return (
        <div className="Games">
          <header className="Games-header">
            <h1 className='Games-main-title'>Games</h1>
            <div className='Onegoat'>
              <h2 className='Games-title'>One G.O.A.T</h2>
              <div className='Games-subtitle'>
              <p>32 Legends</p>
              <p>4 Weeks</p>
              </div>
            </div>            
          </header>
          <div className='Body-games'>
            <div className='Card-legend-container'>
                <div className='Card-legend-contain'>
                    <div className='Card-legend'>
                        <div className='Image-card-legend'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend'>Stephen Curry</div>
                    </div>
                    <button className='buttonVs'>VS</button>
                    <div className='Card-legend1'>
                        <div className='Image-card-legend1'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend1'>Stephen Curry</div>
                    </div>
                </div>
                <div className='Card-legend-contain'>
                    <div className='Card-legend'>
                        <div className='Image-card-legend'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend'>Stephen Curry</div>
                    </div>
                    <button className='buttonVs'>VS</button>
                    <div className='Card-legend1'>
                        <div className='Image-card-legend1'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend1'>Stephen Curry</div>
                    </div>
                </div>
                <div className='Card-legend-contain'>
                    <div className='Card-legend'>
                        <div className='Image-card-legend'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend'>Stephen Curry</div>
                    </div>
                    <button className='buttonVs'>VS</button>
                    <div className='Card-legend1'>
                        <div className='Image-card-legend1'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend1'>Stephen Curry</div>
                    </div>
                </div>
                <div className='Card-legend-contain'>
                    <div className='Card-legend'>
                        <div className='Image-card-legend'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend'>Stephen Curry</div>
                    </div>
                    <button className='buttonVs'>VS</button>
                    <div className='Card-legend1'>
                        <div className='Image-card-legend1'><img src={cardImageSrc} className="playerImg"
        alt="image des joueurs"/></div>                        
                        <div className='Name-card-legend1'>Stephen Curry</div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      );
    }

export default Games;

