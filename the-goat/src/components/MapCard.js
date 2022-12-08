import React from 'react';
import ButtonsVS from './ButtonsVS';
import CardData from './CardDataLeft';
import CardLegend from './CardLegend';
import CardDataLeft from './CardDataLeft';
import CardDataRight from './CardDataRight';


const MapCard = () => {
    console.log(CardData);
    return (
      <div className="Card-Legend">
        {CardDataLeft.map((data, index) => (
          <CardLegend
            key={index}
            dataImage={data.image}
            dataName={data.name}
           />
        ))}
        <ButtonsVS />
        {CardDataRight.map((data, index) => (
          <CardLegend
            key={index}
            dataImage={data.image}
            dataName={data.name}
           />
        ))}
      </div>
    );
  };
  export default MapCard;