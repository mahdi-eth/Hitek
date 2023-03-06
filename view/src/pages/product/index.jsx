import React from "react";
import iphone13 from "@/assets/images/productImg/iphone13promax.jpg";
import { BsFillShareFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar, FaPercent, FaHome, FaTruck } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import miniIcom from "@/assets/images/icons/seller.png";
import { AddToCartButton } from "@/components";
import houer from "@/assets/images/deliverySection/24houer.png";
import PayInLocation from "@/assets/images/deliverySection/PayInLocation.png";
import ReturnWarranty from "@/assets/images/deliverySection/ReturnWarranty.png";
import WarrantyOfOriginality from "@/assets/images/deliverySection/WarrantyOfOriginality.png";
import Fastdelivery from "@/assets/images/deliverySection/Fastdelivery.png";
import { Header } from "@/layout";
import img from "@/assets/images/product/product.png";
import { RecomendedCart } from "@/components";
import { TabSwitch } from "@/components";

export function ProductPage() {
  return (
    <div className="py-10">
      <div className="container mx-auto lg:minmin-w-fit md:px-20  sm:px-16 mb-7">
        <Header />
        <p className="mt-5">
          <Link to="/">Home</Link> / <Link>iPhone</Link> /{" "}
          <Link>iphone 13 promax</Link>{" "}
        </p>
        <div className="font-semibold mx-auto pt-7 flex justify-center">
          Apple mobile phone model iPhone 12 Pro Max A2412 dual SIM card
          capacity 256 GB
        </div>
        <div
          className=" flex pt-10 pl-10 flex-wrap"
          id="product-section">
          <div>
            <BsFillShareFill size={"40px"} />
            <CiHeart size={"40px"} />
            <MdOutlineStackedLineChart size={"40px"} />
          </div>
          <img
            style={{
              height: "310px",
              width: "230px"
            }}
            src={iphone13}
            alt="product-image"
          />
          <div className="pt-14 pl-2 flex flex-col gap-3">
            <div className="flex">
              <p className="text-xs opacity-50">
                Apple iPhone 12 Pro Max A2412 Dual SIM 256GB Mobile Phone
              </p>
            </div>
            <div className="flex text-xs  gap-4 align-middle">
              <FaThumbsUp />

              <p>89% of buyers have suggested this product</p>
              <div id="rate" className="flex font-bold">
                4.6
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
              <li>Internal memory : 256 GB</li>
              <li>Communicati on networks : 2G ,3G ,4G ,5G </li>
            </div>
          </div>
          <div
            className="p-2 shadow-2xl ml-12"
            style={{
              height: "460px",
              width: "388px",
              backgroundColor:'#F5F5F5'
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
                  preformance Excellent{" "}
                  <span className="text-primary">99%</span>{" "}
                  <AiOutlineArrowRight size={20} opacity="40%" />
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
                  Available in Hitek warehouse
                </div>

                <div className="flex pl-14 gap-2 items-center">
                  <FaTruck color="blue" />
                  <span>Sned Hitek</span>
                  <span className="pl-40">
                    <AiOutlineArrowRight size={20} opacity="40%" />
                  </span>
                </div>
                <hr />
                <hr />
              </div>
              <div className="flex gap-4 p-3 pt-5">
                <span>
                  <IoIosPricetags size={20} color="#FAAD13" />
                </span>
                <span className="font-bold">Price |</span>
                <span className="font-bold">1,300 $</span>
              </div>
              <AddToCartButton />
            </div>
          </div>
        </div>
        <hr className="mt-8" />
        <div
          className=" flex  justify-center gap-16 py-10 flex-wrap"
          id="deliverySection">
          <div className="flex flex-wrap flex-col font-bold justify-cen items-center">
            <span>Fast delivery</span>
            <img src={Fastdelivery} alt="content" />
          </div>
          <div className="flex flex-wrap flex-col font-bold justify-cen items-center">
            <span> 24 hour support</span>
            <img src={houer} alt="content" />
          </div>
          <div className="flex flex-wrap flex-col font-bold justify-cen items-center">
            <span>Pay in location</span>
            <img src={PayInLocation} alt="" />
          </div>
          <div className="flex flex-wrap flex-col font-bold justify-cen items-center">
            <span>Return Warranty</span>
            <img src={ReturnWarranty} alt="" />
          </div>
          <div className="flex flex-wrap font-bold flex-col justify-cen items-center">
            <span>Warranty of originality</span>
            <img src={WarrantyOfOriginality} alt="" />
          </div>
          <div className="flex justify-between px-14 w-full ">
            <span className="font-bold">Related products</span>
            <span>
              <button className="border shadow-lg border-primary px-6 py-2 rounded-lg font-bold  items-center align-middle">
                show all
              </button>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center pb-6 flex-wrap gap-5">
          <Link to={'/'}>
          <RecomendedCart
            image={img}
            desc={"Bored work from home? You can make a juice for your health"}
            />
            </Link>
            <Link to={'/'}>
          <RecomendedCart
              image={img}
              desc={"Bored work from home? You can make a juice for your health"}
              />
              </Link>
            <Link to={'/'}>
          <RecomendedCart
            image={img}
            desc={"Bored work from home? You can make a juice for your health"}
            />
            </Link>
            <Link to={'/'}>
             <RecomendedCart
            image={img}
            desc={"Bored work from home? You can make a juice for your health"}
            />
            </Link>
        </div>
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="flex pt-10">
          <div className="w-50">
            <TabSwitch />
          </div>
          <div className="w-50">

          </div>
        </div>
      </div>
    </div>
  );
}
