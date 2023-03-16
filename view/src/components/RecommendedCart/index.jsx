import { checkPropTypes } from "prop-types";
import React from "react";
export const RecomendedCart = ({image, desc,name}) => {
  return (
    <>
      <div className="flex flex-col w-64 gap-8 items-center py-7 rounded-lg overflow-hidden  bg-blue-50">
        <img
          className="w-full object-cover "
          style={{ width: "150px"}}
          src={image}
          alt={name}
        />
        <div className="text-ـDarkblue  text-center font-semibold p-10">{desc}</div>
 
      </div>
    </>
  );
};
RecomendedCart.propTypes = {
  image: checkPropTypes.string,
  desc: checkPropTypes.string,
  name:checkPropTypes.string,
};
