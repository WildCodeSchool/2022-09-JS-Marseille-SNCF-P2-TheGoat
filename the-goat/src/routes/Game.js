import React from 'react';
import Header from '../components/Header';
import PageButtons from '../components/PageButtons';
import CardLegendContainer from '../components/CardLegendContainer';
import '../components/Games.css';
import '../components/PageButtons.css';
import '../components/CardLegendContainer';
import '../components/CardLegendContain';

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

