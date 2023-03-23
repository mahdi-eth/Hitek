import React from "react";
import { Header } from "@/layout";
import {
  TabSwitch,
  DeliverySection,
  BuySection,
  RecommendedSection
} from "@/components";

export function ProductPage() {
  return (
    <div className=" flex flex-col gap-y-4 w-full">
        <Header />
        <BuySection />
        <hr className="mt-8" />
        <DeliverySection />
        <RecommendedSection />
            <TabSwitch />
        </div>
  );
}
