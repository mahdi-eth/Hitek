import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components";
import { AiOutlineSearch } from "react-icons/ai";
import { getFiltersService } from "@/api";

export function Filters() {
  const [brands, setBrands] = useState([]);
  const [CPUs, setCPUs] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCPUs, setSelectedCPUs] = useState([]);

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    console.log(value, checked);
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
    console.log(value, checked);
    setSelectedCPUs((prevSelectedCPUs) => {
      if (checked) {
        return [...prevSelectedCPUs, value];
      } else {
        return prevSelectedCPUs.filter((cpu) => cpu !== value);
      }
    });
  };

  const filter = () => {
    // Call your post function here with the selected filters
    console.log(selectedBrands, selectedCPUs, availableProducts);
  };

  useEffect(() => {
    getFiltersService().then((res) => {
      setBrands(res.brands);
      setCPUs(res.CPUs);
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full sm:max-w-270">
      <div className="search-bar border bg-gray-50 border-gray-300 rounded-lg p-3 flex flex-col justify-center items-start">
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
            type="text"
            placeholder="Product Name..."
            className="w-full bg-gray-100 px-2 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>
      <button
        onClick={filter}
        className="bg-primary hidden sm:block  text-white w-full py-2 rounded mt-4">
        Apply filters
      </button>
    </div>
  );
}
