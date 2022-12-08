import React from 'react';
import './Teams.css';
import CardContain from './CardContain';
// import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Map from '../assets/nba-map.jpg';


function Teams() {
  return (
    <div className="teams">
      
        <header className="teams-header">
            
            <h1 className='teams-main-header'>Teams</h1>
            <div className='Onegoat'>
              <h2 className='title'>One G.O.A.T</h2>
            </div>
        </header>
        <div className='body-teams' >
            <div className='card-teams-container'>
              
              <div className='card-teams'>
                    <div className='title-card'>
                    Central Division  16977
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
              <div className='card-teams'>
                    <div className='title-card'>
                      Atlantic Division  16978
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
              <div className='card-teams'>
                    <div className='title-card'>
                    Southeast Division  16979
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
            </div>
            <div className='card-teams-container'>  
              <div className='card-teams'>
                    <div className='title-card'>
                    Northwest Division  16980
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
              <div className='card-teams'>
                    <div className='title-card'>
                    Pacific Division  16981
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
              <div className='card-teams'>
                    <div className='title-card'>
                    SouthwestDivision  16982
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
              
            </div>
        </div>
        <div className='teamsMapButtons'>
            <button onClick={Map} className='mapButtons'>Look the Map !</button>
        </div>
    </div>
  );
}

export default Teams;
