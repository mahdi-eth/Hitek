import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/layout";
import { ProductCard, FilterButton, Filters } from "@/components";
import img from "@/assets/images/product/product.png";

export function Products() {
  return (
    <div className="container mx-auto lg:minmin-w-fit md:px-20 sm:px-16 px-8">
      <Header />
      <p className="mt-5">
        <Link to="/">Home</Link> / <Link>Digital products</Link> /{" "}
        <Link>Macbooks</Link>{" "}
      </p>
      <section className="mt-12 flex flex-col sm:flex-row gap-4">
        <FilterButton />
        <div className="left-side">
          <Filters />
        </div>
        <div className="right-side w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
          <ProductCard
            image={img}
            name={"Nitro 5 nitro5-55-70uz"}
            price={4000}
            score={4.5}
          />
        </div>
      </section>
    </div>
  );
}
