import React from 'react';
import Header from './Header';
import PageButtons from './PageButtons';
import CardLegendContainer from './CardLegendContainer';
import './Games.css';
import './Header.css';
import './PageButtons.css';
import './CardLegendContainer';
import './CardLegendContain';

function Games() {
    return (
        <div className="Games">
          < Header />
          <div className='Body-games'>
            < CardLegendContainer />
            < PageButtons />            
          </div>         

        </div>
      );
    }

export default Games;

