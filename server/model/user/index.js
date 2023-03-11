const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    otpCode: { type: String },
    createdAt: { type: String, default: new Date() }
});

module.exports = { User }