import React from 'react';
import './CardLegend';


function CardLegend(props){
    return (
        <div className='Card-legend'>
            <div className='Image-card-legend'><img src={props.dataImage} className="playerImg"
                alt="image des joueurs"/></div>                        
            <div className='Name-card-legend'>{props.dataName}</div>
        </div>
    );
}
export default CardLegend;