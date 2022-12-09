import './StartButton.css';
import Img1 from '../assets/ballon-startgame.png';
import thegoat from '../assets/the-goatBG.jpg';
// import {Routes, Route, useNavigate} from 'react-router-dom';


function StartButton () {

  const navigateGame = () => {
    alert('Go Page Game');
    
      //     // 👇️ navigate to /
      //     navigate('/Game');
      //   };
      
  };
  return (
    <div className='bgMain'>
      <img src={thegoat} alt="" />
        <div className='myButton'>
          <img onClick={navigateGame} src={Img1} alt="Start The Game" />
        </div>
      
    </div>
  );
}



// export default function Navigate() {
//   

//   const navigateHome = () => {
//     // 👇️ navigate to /
//     navigate('/');
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={navigateHome}>Home</button>
//         <hr />
//         <button onClick={navigateToContacts}>Contacts</button>

//         <Routes>
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Contacts() {
//   return <h2>Contacts</h2>;
// }







export default StartButton;