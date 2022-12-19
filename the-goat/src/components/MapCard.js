import React from "react";
import ButtonsVS from "./ButtonsVS";

import CardLegend from "./CardLegend";
import CardData from "./CardData";

const MapCard = () => {
  return (
    <div className="Card-Legend">
      {CardData.map((data, index) => (
        <CardLegend key={index} dataImage={data.image} dataName={data.name} />
      ))}
      <ButtonsVS />
    </div>
  );
};
export default MapCard;
