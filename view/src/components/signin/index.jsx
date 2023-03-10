import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkPropTypes } from "prop-types";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { signinUserService } from "@/api";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
});

export const SigninComponent = ({ setForgotPass }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let res;
    try {
      res = await signinUserService(data);
      const { message, token } = res;
      Cookies.set("token", token);
      toast.success(message, {
        onClose: () => {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="right-side mx-auto my-auto flex items-center flex-col text-center mt-12 md:mt-24">
        <h2 className="text-3xl font-semibold mb-6 text-_Gray">
          Welcome back.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:min-w-360 text-left pb-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <p className="mx-4 text-center font-bold text-_Gray">
              Sign in with your email
            </p>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-_Gray dark:text-white">
              Email address*
            </label>
            <input
              autoComplete="none"
              type="text"
              {...register("email")}
              id="email"
              className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:outline-primary dark:focus-visible:border-blue-500 dark:shadow-sm-light"
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
              className="block mb-2 text-sm font-medium text-_Gray dark:text-white">
              Password*
            </label>
            <input
              autoComplete="none"
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter password"
              className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:outline-primary dark:focus-visible:border-blue-500 dark:shadow-sm-light"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {" "}
                {errors.password.message}{" "}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center h-5">
              <input
                autoComplete="none"
                id="terms"
                type="checkbox"
                className="w-4 h-4 border px-5 cursor-pointer border-gray-300 rounded-lg bg-white py-3 focus-visible:ring-3 focus-visible:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus-visible:ring-blue-600 dark:ring-offset-gray-800 dark:focus-visible:ring-offset-gray-800"
              />
              <label
                htmlFor="terms"
                className="ml-2 cursor-pointer text-sm font-medium text-_Gray dark:text-gray-300">
                Keep me sign in
              </label>
            </div>
            <a
              onClick={() => setForgotPass(true)}
              className="text-primary cursor-pointer">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-primary mb-6 text-white transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
            Sign in
          </button>
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary cursor-pointer">
              Sign up now
            </Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

SigninComponent.propTypes = {
  setForgotPass: checkPropTypes.function
};
