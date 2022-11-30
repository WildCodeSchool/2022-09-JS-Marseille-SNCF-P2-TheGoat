
import {Routes, Route, useStartButton} from 'react-router-dom';
import './components/StartButton.css';

export default function StartButton() {
  const navigate = useStartButton();

  const navigateToGame = () => {
  
    navigate('./components/games');
  };


  return (
    <div>
      <div >
        <button className='start-button' onClick={navigateToGame}
        img="the-goat/src/assets/image/pngegg.png" >Start the game</button>


      </div>
    </div>
  );
}


