import Versus from './components/Versus';
import './components/Versus.css';

import React from 'react';
import StartButton from "./components/StartButton";
import './App.css';

import StartVideo from "./components/StartVideo";

import "./components/StartVideo.css"

const App = () => {
  return (

    <div className="App">
      <header className="App-header">
        
      </header>
      <Versus />    
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
