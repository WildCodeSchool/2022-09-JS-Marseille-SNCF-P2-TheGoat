import React from 'react';
import './Teams.css';
import CardContain from './CardContain';
import Map from './Map';
import './CardContain.css';


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
                    Central Division
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
              <div className='card-teams'>
                    <div className='title-card'>
                      Atlantic Division
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
              <div className='card-teams'>
                    <div className='title-card'>
                    Southeast Division
                    </div>
                    <div className='list-card'>
                      <CardContain />
                    </div>
              </div>
            </div>
            <div className='card-teams-container'> 
              <div className='card-teams'>
                      <div className='title-card'>
                      Northwest Division
                      </div>
                      <div className='list-card'>
                        <CardContain />
                      </div>
                </div> 
                
                <div className='card-teams'>
                      <div className='title-card'>
                      Pacific Division
                      </div>
                      <div className='list-card'>
                        <CardContain />
                      </div>
                </div>
                <div className='card-teams'>
                      <div className='title-card'>
                      SouthwestDivision
                      </div>
                      <div className='list-card'>
                        <CardContain />
                      </div>
                </div>
              
            </div>
        </div>
        <div className='teamsMapButtons'>
            <Map />
        </div>
    </div>
  );
}

export default Teams;




{/* <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root">Milwaukee Bucks</span> */}