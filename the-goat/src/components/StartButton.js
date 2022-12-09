import './StartButton.css';
import Img1 from '../assets/ballon-startgame.png';
import { Link } from "react-router-dom";




function StartButton () {

  const navigateGame = () => {
       
          // 👇️ navigate to /
          navigateGame('/Game');
      
      
  };
  return (
    
      <>
        <div className='myButton'>
        <Link to="/Game">
          <img onClick={navigateGame} src={Img1} alt="Start The Game" />
        </Link>
        </div>
      </>
    
  );
}


export default StartButton;