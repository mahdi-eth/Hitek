import React, { useEffect, useState } from "react";

import { BsFillShareFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar, FaPercent, FaHome, FaTruck } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
// import { Link } from "react-router-dom";
import miniIcom from "@/assets/images/icons/seller.png";
import { AddToCartButton } from "@/components";
import { getSingleProductService } from "../../api/services/fetchSingleProduct";
import { useProductId } from "../../context/productId";

export const BuySection = () => {
  const { productId } = useProductId();
  const [ProductData, setProductData] = useState({});

  useEffect(() => {
    getSingleProductService({ id: productId }).then((res) => {
      const singleProductData = res.product;
      setProductData(singleProductData);
    });
  }, [productId]);
  console.log(ProductData);

  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="flex justify-center font-bold">
        {ProductData?.brand} {ProductData?.name}
        {ProductData?.features?.memory}
      </div>
      <div
        className="flex  sm:items-center w-full flex-wrap  justify-center"
        id="product-section">
        <div className="flex flex-row items-center">
          <div className="flex flex-col p-2 pb-32 gap-3">
            <CiHeart opacity="50%" size={"25px"} />
            <BsFillShareFill opacity="50%" size={"25px"} />
            <MdOutlineStackedLineChart opacity="50%" size={"25px"} />
          </div>
          <div>
            <img
              style={{
                height: "310px",
                width: "230px"
              }}
              src={ProductData?.image}
              alt="product-image"
            />
          </div>
        </div>

        <div className=" flex flex-col p-5 gap-3">
          <div className="flex">
            <p className="text-xs opacity-50">
              {ProductData?.brand} {ProductData?.name}
            </p>
          </div>
          <div className="flex text-xs  gap-4 align-middle">
            <FaThumbsUp />

            <p>89% of buyers have suggested this product</p>
            <div id="rate" className="flex font-bold">
              {ProductData?.rating}
              <FaStar color="gold" size={14} />
            </div>
          </div>
          <div className="pl-8 flex flex-col gap-2">
            <div className=" flex gap-2 text-base">
              color <p className="opacity-50 text-base">: Golden</p>
            </div>
            <div className="flex gap-3 pt-8">
              <div className="bg-slate-500 rounded-3xl w-10 h-10 border-4 border-slate-400"></div>
              <div className="bg-yellow-500 rounded-3xl w-10 h-10 border-4 border-slate-400"></div>
              <div className="bg-slate-900 rounded-3xl w-10 h-10 border-4 border-slate-400"></div>
              <div className="bg-orange-500 rounded-3xl w-10 h-10 border-4 border-slate-400"></div>
              <div className="bg-orange-500 rounded-3xl w-10 h-10 border-4 border-slate-400"></div>
            </div>
            <div className="font-bold pt-8">Product Features</div>
            <li>Internal memory : {ProductData?.features?.memory}</li>
            <li>Communicati on networks : 2G ,3G ,4G ,5G </li>
          </div>
        </div>
        <div
          className="p-3 pt-5 mt-4 shadow-2xl "
          style={{
            height: "460px",
            width: "388px",
            backgroundColor: "#F5F5F5"
          }}>
          <div className="flex justify-between p-8">
            <div className="font-bold"> the seller</div>
            <div className="font-bold text-primary"> other seller</div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-wrap p-3">
              <img src={miniIcom} alt="" />
              <div className="font-bold pl-3">hitek</div>
              <div className="pl-10 gap-2 text-xs flex">
                Buyer <span className="text-primary">satisfaction</span> |
                preformance Excellent <span className="text-primary">99%</span>{" "}
              </div>
            </div>
            <hr />
            <hr />

            <div className="flex items-center p-3 gap-2">
              <FaPercent size={20} />
              18 month warranty of Hitek
            </div>
            <hr />
            <hr />
            <div>
              <div className="flex gap-3 p-3 items-center">
                <FaHome size={20} />
                avalibility: {ProductData?.available}
              </div>

              <div className="flex pl-14 gap-2 items-center">
                <FaTruck color="blue" />
                <span>Sned Hitek</span>
                <span className="pl-40"></span>
              </div>
              <hr />
              <hr />
            </div>
            <div className="flex gap-4 p-3 pt-5">
              <span>
                <IoIosPricetags size={20} color="#FAAD13" />
              </span>
              <span className="font-bold">Price |</span>
              <span className="font-bold">{ProductData?.price} $</span>
            </div>
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  );
};
