import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Products } from "@/context";
import "./index.css";
import { ProductId } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Products>
        <ProductId>
          <App />
        </ProductId>
      </Products>
    </BrowserRouter>
  </React.StrictMode>
);
