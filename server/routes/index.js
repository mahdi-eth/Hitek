const express = require("express");
const router = express.Router();

exports.signup = router.post("/singup", () => console.log("signUp stage"));
