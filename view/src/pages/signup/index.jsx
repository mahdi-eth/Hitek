import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo/logo.svg";
import img from "@/assets/images/signuppage/bitmap.png";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signupUserService } from "@/api/services/auth/signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
});

export function Signup() {
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

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    let res;
    try {
      res = await signupUserService(data);
      toast.success(res.message, {
        onClose: () => {
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
        }
      });
    } catch (ex) {
      toast.error(ex.response.data.message);
    }
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
        <div className="right-side mx-auto my-auto flex items-center flex-col text-center mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-_Gray">
            Let&apos;s join us
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="sm:min-w-360 text-left mb-6">
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <p className="mx-4 text-center font-bold text-_Gray">
                Sign up with your email
              </p>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="your-name"
                className="block mb-2 text-sm font-medium text-_Gray">
                Your name*
              </label>
              <input
                autoComplete="none"
                type="text"
                {...register("name")}
                id="your-name"
                placeholder="Enter name"
                className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {" "}
                  {errors.name.message}{" "}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-_Gray">
                Email address*
              </label>
              <input
                autoComplete="none"
                type="text"
                {...register("email")}
                id="email"
                className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 "
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {" "}
                  {errors.email.message}{" "}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-_Gray">
                Password*
              </label>
              <input
                autoComplete="none"
                type="password"
                {...register("password")}
                id="password"
                placeholder="Enter password"
                className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 "
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {" "}
                  {errors.password.message}{" "}
                </p>
              )}
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  autoComplete="none"
                  id="terms"
                  type="checkbox"
                  {...register("termsAndConditions")}
                  className="w-4 h-4 border px-5 cursor-pointer border-gray-300 rounded-lg bg-white py-3 focus-visible:ring-3 focus-visible:ring-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="terms"
                  className="ml-2 cursor-pointer text-sm font-medium text-_Gray">
                  Agree to terms & conditions
                </label>
                {errors.termsAndConditions && (
                  <p className="text-red-500 text-xs mt-1 text-left">
                    {" "}
                    {errors.termsAndConditions.message}{" "}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary mb-6 text-white transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
              Sign up
            </button>
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary cursor-pointer">
                Sign in now
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
