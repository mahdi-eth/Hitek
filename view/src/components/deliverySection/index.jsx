import React from "react";
import houer from "@/assets/images/deliverySection/24houer.png";
import PayInLocation from "@/assets/images/deliverySection/PayInLocation.png";
import ReturnWarranty from "@/assets/images/deliverySection/ReturnWarranty.png";
import WarrantyOfOriginality from "@/assets/images/deliverySection/WarrantyOfOriginality.png";
import Fastdelivery from "@/assets/images/deliverySection/Fastdelivery.png";
export function DeliverySection() {
  return (
    <div>
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
         
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded-full">
              Show All
            </button>
        </div>
      </div>
    </div>
  );
}
