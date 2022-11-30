import './StartButton.css';
import Img1 from './Img1.png';
import thegoat from './thegoat.jpg';


function StartButton () {
  return (
    <div className='bgMain'>
      <img src={thegoat} alt="" />
        <div className='myButton'>
          <img src={Img1} alt="Start The Game" />
        </div>
    </div>
  );
}







export default StartButton;