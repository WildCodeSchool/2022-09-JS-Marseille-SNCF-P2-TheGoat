
import {Routes, Route, useStartButton} from 'react-router-dom';
import './StartButton.css';

export default function StartButton() {
  const navigate = useStartButton();

  const navigateToGame = () => {
    // 👇️ navigate to /contacts
    navigate('./components/games');
  };


  return (
    <div>
      <div className='start-button'>
        <button onClick={navigateToGame}
        img="the-goat/src/assets/image/pngegg.png" >Start the game</button>


        <Routes>
          <Route path='./components/games' element={<Games />} />
          
        </Routes>
      </div>
    </div>
  );
}


