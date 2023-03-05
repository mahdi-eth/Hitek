import { checkPropTypes } from "prop-types";
import React from "react";
import { AiFillStar } from "react-icons/ai";
export const RecomendedCart = ({image, desc}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 items-center py-7 rounded-lg overflow-hidden shadow-lg bg-blue-50">
        <img
          className="w-full object-cover"
          style={{ width: "150px" }}
          src={image}
          alt={name}
        />
        <div className="text-ـDarkblue mb-2 text-center font-semibold">{desc}</div>
        <div className="flex justify-center gap-4 items-center mb-2">
          <div className="flex items-center text-black opacity-75">
          </div>
        </div>
      </div>
    </>
  );
};
RecomendedCart.propTypes = {
  image: checkPropTypes.string,
  name: checkPropTypes.string,
  price: checkPropTypes.number,
  score: checkPropTypes.number
};
