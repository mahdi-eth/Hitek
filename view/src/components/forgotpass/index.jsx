import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { userOTPService } from "@/api";
import { ToastContainer, toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email")
});

export const ForgotPass = ({ setForgotPass }) => {
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (email) => {
    try {
      await userOTPService(email);
      toast.success("OTP sent to your email!");
      setShowOtpInput(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="right-side mx-auto my-auto flex items-center flex-col text-center mt-12 md:mt-24">
        <h2 className="text-3xl font-semibold mb-6 text-_Gray">
          Enter your email
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:min-w-360 text-left pb-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <p className="mx-4 text-center font-bold text-_Gray">
              and we&apos;ll send you a validation code
            </p>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          {!showOtpInput && (
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
          )}
          {showOtpInput && (
            <div className="mb-6">
              <label
                htmlFor="otp"
                className="block mb-2 text-sm font-medium text-_Gray dark:text-white">
                OTP*
              </label>
              <input
                autoComplete="none"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                id="otp"
                className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:outline-primary dark:focus-visible:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter OTP"
              />
            </div>
          )}

          <div className="flex items-center justify-between mb-6">
            <a
              onClick={() => setForgotPass(false)}
              className="text-primary cursor-pointer">
              I know my password
            </a>
          </div>
          <button
            type="submit"
            className="bg-primary mb-6 text-white transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
            Send code
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

ForgotPass.propTypes = {
  setForgotPass: PropTypes.func.isRequired
};
