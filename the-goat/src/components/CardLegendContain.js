import React from 'react';
import ButtonsVS from './ButtonsVS';

import './CardLegend';
import './ButtonsVS';
import MapCard from './MapCard';

function CardLegendContain(){
    return(
        <div className='Card-legend-contain'>
            <MapCard />
            <ButtonsVS />
            <MapCard />
        </div>
    );
}
export default CardLegendContain;