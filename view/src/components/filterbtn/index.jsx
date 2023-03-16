import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components";
import { AiOutlineSearch } from "react-icons/ai";
import { getFiltersService, postFiltersDataService } from "@/api";
import { useProducts } from "@/context";

export const FilterButton = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { setProducts } = useProducts();
  const [brands, setBrands] = useState([]);
  const [CPUs, setCPUs] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState(
    () => JSON.parse(localStorage.getItem("selectedBrands")) || []
  );
  const [selectedCPUs, setSelectedCPUs] = useState(
    () => JSON.parse(localStorage.getItem("selectedCPUs")) || []
  );
  const [search, setSearch] = useState(
    () => localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("selectedBrands", JSON.stringify(selectedBrands));
  }, [selectedBrands]);

  useEffect(() => {
    localStorage.setItem("selectedCPUs", JSON.stringify(selectedCPUs));
  }, [selectedCPUs]);

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  const renderCheckbox = (items, onChangeHandler) => {
    return items.map((item, index) => (
      <Checkbox
        key={index}
        id={index}
        value={item}
        onChange={onChangeHandler}
      />
    ));
  };

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
    setTimeout(() => {
      postFiltersDataService([
        selectedBrands,
        selectedCPUs,
        availableProducts,
        search
      ]).then((res) => {
        setProducts(res);
      });
      setSearch(event.target.value);
    }, 1000);
  };

  useEffect(() => {
    getFiltersService().then((res) => {
      setBrands(res.brands);
      setCPUs(res.CPUs);
    });
  }, []);

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

  return (
    <>
      <button
        className="bg-primary sm:hidden text-white px-4 py-2 rounded"
        onClick={() => setIsFilterOpen(!isFilterOpen)}>
        Filters
      </button>

      {isFilterOpen && (
        <div className="w-full h-full flex items-center justify-center z-50 overflow-scroll">
          <div className="p-4 text-center my-8 overflow-scroll">
            <div className="flex flex-col gap-5 w-full">
              <div className="brand border bg-gray-50 border-gray-300 rounded-lg p-3 flex flex-col justify-center items-start">
                <p className="text-lg font-medium text-ـDarkblue_hover">
                  Brand
                </p>
                <hr className="border-gray-300 w-full my-4" />
                <div className="flex flex-col flex-wrap h-64">
                  {renderCheckbox(brands, handleBrandChange)}
                </div>
              </div>
              <div className="CPU border bg-gray-50 border-gray-300 rounded-lg p-3 flex flex-col justify-center items-start">
                <p className="text-lg font-medium text-ـDarkblue_hover">CPU</p>
                <hr className="border-gray-300 w-full my-4" />
                <div className="flex flex-col flex-wrap h-64">
                  {renderCheckbox(CPUs, handleCPUChange)}
                </div>
              </div>
              <div className="check flex items-center bg-gray-50 px-5 py-4 border border-gray-300 rounded-lg gap-12">
                <span className="text-_Gray font-semibold">
                  Available products
                </span>
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
            </div>
            <button
              className="bg-primary text-white w-full py-2 rounded mt-4"
              onClick={() => {
                filter();
                setIsFilterOpen(false);
              }}>
              Apply filters
            </button>
          </div>
        </div>
      )}
      <div className="search-bar border bg-gray-50 border-gray-300 rounded-lg p-3 flex sm:hidden flex-col justify-center items-start">
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
            onChange={updateSearchBar}
            type="text"
            placeholder="Product Name..."
            className="search-input w-full bg-gray-100 px-2 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </>
  );
};