import './StartButton.css';
import { Link } from "react-router-dom";

function StartButton () {
  return (
    
      <>
        <div className='Button'>
        <Link to="/Game">
          <button className='myButton' />
        </Link>
        </div>
      </>
    
  );
}


export default StartButton;