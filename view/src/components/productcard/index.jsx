import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { PropTypes } from "prop-types";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { sendProductToBaketService } from "@/api";
import { useProductId } from "@/context";

export const ProductCard = ({ image, name, price, score, id }) => {
  const { setProductId } = useProductId();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleBuy = () => {
    const hasToken = Cookies.get("hitekAuthToken");

    if (hasToken) {
      sendProductToBaketService({ id, token: hasToken })
        .then((res) => {
          toast.success(res.message);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.info("You must sign up first.");
    }
  };

  const navigate = useNavigate()

  const handleCardClick = (e) => {
    if (e.target.innerText != "Buy") {
      setProductId(id)
      navigate("/product")
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center min-h-400 gap-8 py-7 rounded-lg overflow-hidden shadow-lg bg-green-50 hover:shadow-inner cursor-pointer transform duration-150"
      onClick={handleCardClick}>
      {!imageLoaded && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        className={`w-full object-cover rounded-sm ${
          imageLoaded ? "" : "hidden"
        }`}
        style={{ width: "150px" }}
        src={image}
        alt={name}
        onLoad={() => setImageLoaded(true)}
      />
      <div
        className={`text-ـDarkblue mb-2 text-lg ${
          !imageLoaded ? "hidden" : ""
        }`}>
        {name}
      </div>
      <div
        className={`flex justify-center gap-4 items-center mb-2 ${
          !imageLoaded ? "hidden" : ""
        }`}>
        <div className="text-black opacity-75 text-lg">{price}$</div>
        <div className="flex items-center text-black opacity-75 text-lg">
          <AiFillStar className="text-yellow-400" />
          {score}
        </div>
      </div>
      <button
        onClick={handleBuy}
        className={`bg-primary hover:bg-primary_hover text-white py-2 px-12 sm:px-8 lg:px-12 xl:px-20 rounded-lg ${
          !imageLoaded ? "hidden" : ""
        }`}>
        Buy
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  score: PropTypes.number
};
