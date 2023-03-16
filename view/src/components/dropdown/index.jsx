import { PropTypes } from "prop-types";
import { useState, React, useEffect, useRef } from "react";
import { getHeaderBrandsService, filterByHeaderService } from "@/api";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/context";

export const Dropdown = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsToShow, setBrandsToShow] = useState([]);
  const [brandToFilter, setBrandToFilter] = useState("");
  const { setProducts } = useProducts();
  const dropdownRef = useRef();

  const navigate = useNavigate();
  const path = window.location.pathname;

  if (brandToFilter) {
    filterByHeaderService({ brand: brandToFilter, type: value }).then((res) => {
      setProducts(res);
      if (path !== "/all-products") {
        navigate("/all-products");
      }
    });
    setBrandToFilter(null);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const type = { type: value.toLowerCase().slice(0, -1) };
    getHeaderBrandsService(type).then((res) => setBrandsToShow(res.brands));
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex border-b-2 border-white hover:border-primary justify-center w-full py-2 text-sm font-medium text-inherit focus:outline-none"
        onClick={toggleDropdown}
        ref={dropdownRef}>
        {value}
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          {isOpen ? (
            <path fillRule="evenodd" d="M10 6l6 6H4z" />
          ) : (
            <path fillRule="evenodd" d="M10 14l6-6H4z" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            {brandsToShow.map((brand) => (
              <div
                onClick={() => {
                  setBrandToFilter(brand);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 cursor-pointer text-sm text-_Gray hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                key={brand}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string
};
