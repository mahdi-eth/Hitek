import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components";
import { AiOutlineSearch } from "react-icons/ai";
import { getFiltersService, postFiltersDataService } from "@/api";
import { useSearch, useProducts } from "@/context";

export const Filters = () => {
  const [brands, setBrands] = useState([]);
  const { setProducts } = useProducts();
  const [CPUs, setCPUs] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState(
    () => JSON.parse(localStorage.getItem("selectedBrands")) || []
  );
  const [selectedCPUs, setSelectedCPUs] = useState(
    () => JSON.parse(localStorage.getItem("selectedCPUs")) || []
  );
  const { search, setSearch } = useSearch();

  useEffect(() => {
    localStorage.setItem("selectedBrands", JSON.stringify(selectedBrands));
  }, [selectedBrands]);

  useEffect(() => {
    localStorage.setItem("selectedCPUs", JSON.stringify(selectedCPUs));
  }, [selectedCPUs]);

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands((prevSelectedBrands) => {
      if (checked) {
        return [...prevSelectedBrands, value];
      } else {
        return prevSelectedBrands.filter((brand) => brand !== value);
      }
    });
  };

  const handleCPUChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCPUs((prevSelectedCPUs) => {
      if (checked) {
        return [...prevSelectedCPUs, value];
      } else {
        return prevSelectedCPUs.filter((cpu) => cpu !== value);
      }
    });
  };

  const updateSearchBar = (event) => {
    const { value } = event.target;
    setSearch(value);
    setTimeout(() => {
      postFiltersDataService([
        selectedBrands,
        selectedCPUs,
        availableProducts,
        search
      ]).then((res) => {
        setProducts(res);
      });
    }, 1000);
  };

  const filter = () => {
    postFiltersDataService([
      selectedBrands,
      selectedCPUs,
      availableProducts,
      search
    ]).then((res) => {
      setProducts(res);
    });
  };

  useEffect(() => {
    getFiltersService().then((res) => {
      setBrands(res.brands);
      setCPUs(res.CPUs);
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full sm:max-w-270">
      <div className="search-bar border hidden sm:flex bg-gray-50 border-gray-300 rounded-lg p-3 flex-col justify-center items-start">
        <p className="text-lg font-medium text-ـDarkblue_hover">
          Search in products:
        </p>
        <hr className="border-gray-300 w-full my-4" />
        <div className="relative flex items-center w-full">
          <AiOutlineSearch
            size={24}
            className="absolute left-3 text-gray-400"
          />
          <input
            value={search}
            onChange={updateSearchBar}
            type="text"
            placeholder="Product Name..."
            className="search-input w-full bg-gray-100 px-2 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="brand hidden border bg-gray-50 border-gray-300 rounded-lg p-3 sm:flex flex-col justify-center items-start">
        <p className="text-lg font-medium text-ـDarkblue_hover">Brand</p>
        <hr className="border-gray-300 w-full my-4" />
        <div className="brands-section flex flex-col flex-wrap h-64">
          {brands.map((brand, index) => (
            <Checkbox
              key={index}
              id={index}
              value={brand}
              onChange={handleBrandChange}
            />
          ))}
        </div>
      </div>
      <div className="CPU hidden border bg-gray-50 border-gray-300 rounded-lg p-3 sm:flex flex-col justify-center items-start">
        <p className="text-lg font-medium text-ـDarkblue_hover">CPU</p>
        <hr className="border-gray-300 w-full my-4" />
        <div className="flex flex-col flex-wrap h-64">
          {CPUs.map((CPU, index) => (
            <Checkbox
              key={index}
              id={index}
              value={CPU}
              onChange={handleCPUChange}
            />
          ))}
        </div>
      </div>
      <div className="check hidden sm:flex items-center bg-gray-50 px-5 py-4 border border-gray-300 rounded-lg gap-12">
        <span className="text-_Gray font-semibold">Available products</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={(e) => setAvailableProducts(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>
      <button
        onClick={filter}
        className="bg-primary hidden sm:block  text-white w-full py-2 rounded mt-4">
        Apply filters
      </button>
    </div>
  );
};
