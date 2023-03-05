const express = require("express");
const router = express.Router();

exports.signup = router.post(
    "/signup",
    require("../controller/auth/signup").handleUserSignup
);
