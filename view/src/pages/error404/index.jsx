import React from "react";
import logo from "@/assets/images/logo/logo.svg";
import img from "@/assets/images/error404page/404.png";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div className="w-full h-full mt-2 sm:mt-0 flex flex-col items-center sm:relative">
      <Link className="sm:absolute sm:top-6 sm:left-40" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex items-center justify-center mt-2 flex-col pb-32">
        <img style={{ width: "600px" }} src={img} alt="An image" />
        <h2 className="text-3xl mt-12 font-semibold mb-3 text-_Gray px-6">
          Lost in space?
        </h2>
        <p className="text-gray-500 mb-8 px-6">
          The page you requested could not be found
        </p>
        <Link
          to="/"
          className="bg-primary text-white transition duration-150 hover:bg-primary_hover font-semibold py-3 px-9 rounded-lg shadow flex items-center justify-center">
          Back to home
        </Link>
      </div>
    </div>
  );
}
