const express = require("express");
const router = express.Router();

exports.signup = router.post(
    "/signup",
    require("../controller/auth/signup").handleUserSignup
);

exports.signin = router.post(
    "/signin",
    require("../controller/auth/signin").handleUserLogin
);

exports.header = router.post(
    "/header",
    require("../controller/header").getHeaderBrands
);

exports.products = router.get(
    "/products",
    require("../controller/fetchProducts").getProducts
);

exports.filters = router.get(
    "/filters",
    require("../controller/fetchFilters").getFilters
);
