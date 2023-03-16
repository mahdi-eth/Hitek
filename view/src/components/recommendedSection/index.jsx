import React from 'react';
import { RecomendedCart } from '../RecommendedCart';
import { Link } from 'react-router-dom';
import img from "@/assets/images/product/product.png";

export const RecommendedSection = () => {
  return (
    <>
      <div className="flex justify-center items-center pb-6 flex-wrap gap-5">
        <Link to={"/"}>
          <RecomendedCart
            image={img}
            desc={"Bored work from home? You can make a juice for your health"}
          />
        </Link>
        <Link to={"/"}>
          <RecomendedCart
            image={img}
            desc={"Bored work from home? You can make a juice for your health"}
          />
        </Link>
        <Link to={"/"}>
          <RecomendedCart
            image={img}
            desc={"Bored work from home? You can make a juice for your health"}
          />
        </Link>
        <Link to={"/"}>
          <RecomendedCart
            image={img}
            desc={"Bored work from home? You can make a juice for your health"}
          />
        </Link>
      </div>
    </>
  );
};


