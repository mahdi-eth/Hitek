import { checkPropTypes } from "prop-types";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export const ProductCard = ({ image, name, price, score }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center py-7 rounded-lg overflow-hidden shadow-lg bg-blue-50">
      <img
        className="w-full object-cover"
        style={{ width: "150px" }}
        src={image}
        alt={name}
      />
      <div className="text-ـDarkblue mb-2">{name}</div>
      <div className="flex justify-center gap-4 items-center mb-2">
        <div className="text-black opacity-75">{price}$</div>
        <div className="flex items-center text-black opacity-75">
          <AiFillStar className="text-yellow-400" />
          {score}
        </div>
      </div>
      <button className="bg-primary hover:bg-primary_hover text-white py-2 px-12 sm:px-8 lg:px-12 xl:px-20 rounded">
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
