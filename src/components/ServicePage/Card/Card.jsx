import React from "react";
import { CARDS } from "../../../static/cards";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 ">
      {CARDS.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
        >
          <div className="w-24 h-24 flex items-center justify-center mb-6">

            <img src={card.image} alt={card.title} className="w-16 h-16" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h2>
          <p className="text-sm text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
