import React from "react";
import StartButton from "../components/StartButton";
import StartVideo from "../components/StartVideo";

import "../components/Home.css";
import theGoat from "../components/image/the-goat-BG.jpg";

function Home (){
  return (
    <div className="bghome"  >
        <img className='bghome' src={theGoat} alt="" />
        <StartVideo/>
        <StartButton/>
    </div>
  )
}

export default Home