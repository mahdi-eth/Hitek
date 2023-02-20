import { checkPropTypes } from "prop-types";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export const ProductCard = ({ image, name, price, score }) => {
  return (
    <div className="max-w-sm flex flex-col gap-8 items-center px-12 py-7 rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full object-cover"
        style={{ width: "150px" }}
        src={image}
        alt={name}
      />
      <div className="text-ـDarkblue mb-2">{name}</div>
      <div className="flex justify-center gap-4 items-center mb-2">
        <div className="font-bold text-lg">{price}$</div>
        <div className="flex items-center text-gray-600">
          <AiFillStar className="text-yellow-400" />
          {score}
        </div>
      </div>
      <button className="bg-primary hover:bg-primary_hover text-white font-bold py-2 px-20 rounded">
        Buy
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  image: checkPropTypes.string,
  name: checkPropTypes.string,
  price: checkPropTypes.number,
  score: checkPropTypes.number
};