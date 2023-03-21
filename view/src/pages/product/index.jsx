import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/layout";
import {
  TabSwitch,
  DeliverySection,
  BuySection,
  RecommendedSection
} from "@/components";

export function ProductPage() {
  return (
    <div className="flex flex-wrap flex-col">
      <div className="container mx-auto lg:minmin-w-fit md:px-20 sm:px-16 px-8">
        <Header />
        <p className="mt-5 p-3">
          <Link to="/">Home</Link> / <Link>iPhone</Link> /{" "}
          <Link>iphone 13 promax</Link>{" "}
        </p>
    
        <BuySection />
        <hr className="mt-8" />
        <DeliverySection />
        <RecommendedSection />
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="flex pt-10">
          <div className="w-50">
            <TabSwitch />
          </div>
          <div className="w-50"></div>
        </div>
      </div>
    </div>
  );
}
