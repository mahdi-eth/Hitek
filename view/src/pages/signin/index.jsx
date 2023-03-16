import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo/logo.svg";
import img from "@/assets/images/singinpage/Image.png";
import { Link } from "react-router-dom";
import { SigninComponent } from "@/components";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";

export function Signin() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const makeResponsiveImg = () => {
    if (width >= 1127) return { width: "700px" };
    else if (width > 1044) return { width: "600px" };
    else if (width > 921) return { width: "500px" };
    else if (width > 860) return { width: "450px" };
    else if (width < 860 && width > 768) return { width: "400px" };
    return null;
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center mt-2 flex-col md:flex-row">
        <div className="left-side flex flex-col justify-center items-start">
          <Link className="md:mt-6 md:ml-40" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <img
            className="hidden md:block"
            style={makeResponsiveImg()}
            src={img}
            alt="An image"
          />
        </div>
          <SigninComponent />
      </div>
    </>
  );
}
