import React, { useEffect, useState } from "react";
import { Header } from "@/layout";
import { ProductCard, FilterButton, Filters } from "@/components";
import { getProductsService } from "@/api";
import { useProducts } from "@/context";
import { ToastContainer } from "react-toastify";

export function Products() {
  const { products, setProducts } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  useEffect(() => {
    if (products.length == 0) {
      getProductsService().then((res) => setProducts([...res.products]));
    }
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageRange = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);
  let startPage = 1;
  let endPage = totalPages;
  if (totalPages > pageRange * 2) {
    if (currentPage < pageRange + 1) {
      endPage = pageRange * 2 + 1;
    } else if (currentPage > totalPages - pageRange) {
      startPage = totalPages - pageRange * 2;
    } else {
      startPage = currentPage - pageRange;
      endPage = currentPage + pageRange;
    }
  }
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto lg:minmin-w-fit md:px-20 sm:px-16 px-8">
        <Header />
        <section className="mt-12 flex flex-col sm:flex-row gap-4">
          <FilterButton />
          <div className="left-side">
            <Filters />
          </div>
          <div className="right-side w-full">
            {currentProducts.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                Nothing found.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    score={product.rating}
                  />
                ))}
              </div>
            )}

            {products.length > 9 && (
              <div className="flex justify-center my-8 w-full">
                <nav>
                  <ul className="pagination flex gap-3">
                    <li className="page-item">
                      <button className="page-link" onClick={goToPrevPage}>
                        &laquo;
                      </button>
                    </li>
                    {pageNumbers.map((number) => (
                      <li key={number} className="page-item">
                        <a
                          className={`page-link cursor-pointer ${
                            currentPage === number
                              ? "bg-blue-500 rounded-lg py-2 px-3 text-white"
                              : "bg-white py-2 px-3 text-gray-800"
                          } `}
                          onClick={() => setCurrentPage(number)}>
                          {number}
                        </a>
                      </li>
                    ))}
                    <li className="page-item">
                      <button className="page-link" onClick={goToNextPage}>
                        &raquo;
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
