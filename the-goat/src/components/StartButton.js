import './StartButton.css';
import { Link } from "react-router-dom";
import startBallon from "../assets/ballon-startgame.png"

function StartButton () {
  return (
    
      <>
        <div className='Button'>
        <Link to="/Game">
          <img src={startBallon} />
        </Link>
        </div>
      </>
    
  );
}


export default StartButton;

{/* <div className="toogleBtn">
                <img onClick={toggleContent} src={ballon} alt=""/>
                {content && (
                    
                     <VideoContain />
                    
                )}
            </div> */}