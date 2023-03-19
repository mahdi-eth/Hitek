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

exports.filters = router.post(
    "/filters",
    require("../controller/postFilters").postFilters
);

exports.headerFilter = router.post(
    "/filterHeader",
    require("../controller/headerFilter").filterHeader
);

exports.addToBasket = router.post(
    "/basket",
    require("../controller/addToBasket").addToBasket
);

exports.contactus = router.post(
    "/contactus",
    require("../controller/contactus").handleContactus
);

exports.singleProduct = router.post(
    "/product",
    require("../controller/fetchSingleProduct").fetchProduct
);
