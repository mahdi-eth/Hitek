import React from "react";
import iphone13 from "./../../assets/images/productImg/iphone13promax.jpg";
import { BsFillShareFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Header } from "../../layout";
import { Link } from "react-router-dom";
import miniIcom from "../../assets/images/icons/seller.png";
export function ProductPage() {
  return (
    <div
      className="py-10">
      <div className="container mx-auto lg:minmin-w-fit md:px-20 sm:px-16">
        <Header />
        <p className="mt-5">
          <Link to="/">Home</Link> / <Link>iPhone</Link> /{" "}
          <Link>iphone 13 promax</Link>{" "}
        </p>
        <div className="font-semibold mx-auto pt-7 flex justify-center">
          Apple mobile phone model iPhone 12 Pro Max A2412 dual SIM card
          capacity 256 GB
        </div>
        <div className=" flex gap-4 pt-10  ">
          <div className="grid-cols-8">
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
            className= "p-2 shadow"
            style={{
              height: "460px",
              width: "388px"
            }}>
            <div className="flex justify-between">
              <div> the seller</div>
              <div> other seller</div>
            </div>
            <div className="flex flex-col">
             
                <div className="flex flex-wrap p-3">
                  <img src={miniIcom} alt="" />
                 <div className="font-bold pl-3">
                   hitek
                  </div>
                  <div className="pl-10 text-xs">
                    Buyer  satisfaction | preformance Excellent 99%
                  </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
