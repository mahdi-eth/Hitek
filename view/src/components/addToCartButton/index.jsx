import React, { useCallback } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { sendProductToBaketService } from "@/api";
import { useNavigate } from "react-router-dom";


export function AddToCartButton() {
  const navigate=useNavigate()
  const handleBuy = useCallback(() => {
    const hasToken = Cookies.get("hitekAuthToken");

    if (hasToken) {
      sendProductToBaketService({ token: hasToken })
        .then((res) => {
          toast.success(res.message);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.info("You must sign up first.");
    }
  }, []);

  const handleCardClick = useCallback((e) => {
    if (e.target.innerText !== "Buy") {
      navigate("/basket");
    }
  }, []);

  return (
    <button
      onClick={handleBuy}
      onClickCapture={handleCardClick}
      className={`bg-primary hover:bg-primary_hover text-white py-2 px-12 sm:px-8 lg:px-12 xl:px-20 rounded-lg`}
    >
      Buy
    </button>
  );
}
