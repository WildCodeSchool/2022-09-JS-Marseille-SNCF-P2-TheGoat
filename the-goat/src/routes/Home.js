import React from "react";
import StartButton from "../components/StartButton";
import StartVideo from "../components/StartVideo";

import "../components/Home.css";


function Home (){
  return (
    <>
    <div className="bghome"  >
        <StartVideo/>
        <StartButton/>
    </div>
    </>
  )
}

export default Home