import React, { useEffect, useState } from "react";
import { Header } from "@/layout";
import { ProductCard, FilterButton, Filters } from "@/components";
import { getProductsService } from "@/api";

export function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  useEffect(() => {
    getProductsService().then((res) => setProducts([...res.products]));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto lg:minmin-w-fit md:px-20 sm:px-16 px-8">
      <Header />
      <section className="mt-12 flex flex-col sm:flex-row gap-4">
        <FilterButton />
        <div className="left-side">
          <Filters />
        </div>
        <div className="right-side w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
    {currentProducts.map((product) => (
      <ProductCard
        key={product._id}
        image={product.image}
        name={product.name}
        price={product.price}
        score={product.rating}
      />
    ))}
  </div>
  <div className="flex justify-center my-8 w-full">
    <nav>
      <ul className="pagination flex gap-3">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              className={`page-link ${
                currentPage === number
                  ? "bg-blue-500 rounded-lg py-2 px-3 text-white"
                  : "bg-white py-2 px-3 text-gray-800"
              } `}
              onClick={() => setCurrentPage(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</div>

      </section>
    </div>
  );
}
