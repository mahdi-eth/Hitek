import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Checkbox } from "../../components/checkbox";

export function Products() {
  const renderCheckbox = (value) => {
    const renderedItems = [];
    for (let i = 0; i < 7; i++) {
      renderedItems.push(<Checkbox id={i} value={value} />);
    }
    return renderedItems;
  };

  return (
    <div className="container px-36">
      {/* <Header />  to be added */}
      <p className="mt-5">
        <Link to="/">Home</Link> / <Link>Digital products</Link> /{" "}
        <Link>Macbooks</Link>{" "}
      </p>
      <section className="mt-12">
        <div className="left-side flex flex-col gap-5">
          <div className="search-bar border border-gray-300 rounded-lg p-3 flex flex-col justify-center items-start">
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
                placeholder="Product Name or Brand"
                className="w-full bg-gray-100 px-2 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="search-bar border border-gray-300 rounded-lg p-3 flex flex-col justify-center items-start">
            <p className="text-lg font-medium text-ـDarkblue_hover">Brand</p>
            <hr className="border-gray-300 w-full my-4" />
            <div className="relative flex items-center w-full">
              <AiOutlineSearch
                size={24}
                className="absolute left-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search brand name..."
                className="w-full bg-gray-100 px-2 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <hr className="border-gray-300 w-full my-4" />
            <div className="flex flex-wrap">
            {renderCheckbox("Lenova")}
            {renderCheckbox("Apple")}
            </div>
          </div>
        </div>
        <div className="right-side"></div>
      </section>
    </div>
  );
}
