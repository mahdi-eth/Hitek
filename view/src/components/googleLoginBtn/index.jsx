import React from "react";
// import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";

export const GoogleBtn = () => {
    const responseMessage = (response) => {
      console.log(response);
    };

    const errorMessage = (error) => {
      console.log(error);
    };

  return (
    // <>
    //    <button
    //     type="button"
    //     className="bg-primary mb-6 relative transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
    //     <div className="absolute left-1 rounded-lg bg-white px-2 py-2">
    //       <FcGoogle size={24} />
    //     </div>
    //     <p className="text-white">Sign up with Google</p>
    //   </button>
    //    </>
    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} className="bg-primary"/>
  );
};
