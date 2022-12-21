import React from 'react';
import './ButtonsVS.css';
import './CardLegend.css';
import './CardLegendContain.css';
import CardData4 from "./CardData4";
import { Link } from "react-router-dom";

function CardLegendContain4(){
    
    return(
        <>
        {CardData4.map( (data) => {
            return (      
                <div className='Card-legend-contain'>                    
                    <div className='Card-legend'>
                        <div className='Image-card-legend'><img src={data.versus.playerOne.image} className="playerImg"
                         alt="img des joueurs"/></div>                        
                        <div className='Name-card-legend'>{data.versus.playerOne.name}</div>
                    </div>
                    <Link to="../versus">                    
                    <button className='buttonVs'>VS</button>
                    </Link>                    
                    <div className='Card-legend1'>
                        <div className='Image-card-legend1'><img src={data.versus.playerTwo.image} className="playerImg"
                        alt="img des joueurs"/></div>                        
                        <div className='Name-card-legend1'>{data.versus.playerTwo.name}</div>
                    </div>              
                </div>            
        )})
        }
        </>
        );
}
export default CardLegendContain4;