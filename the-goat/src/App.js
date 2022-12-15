import React from 'react';
import './App.css';
import "./components/StartVideo.css"

import StartButton from "./components/StartButton";
import StartVideo from "./components/StartVideo";


const App = () => {
  return (
    <div className="App"> 
    <div>
      <StartButton/>      
    </div>
    <div>
      <StartVideo />
    </div>
    </div>
  );
}
export default App;
