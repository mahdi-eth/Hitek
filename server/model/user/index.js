const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    basket: { type: Array },
    createdAt: { type: String, default: new Date() }
});

module.exports = mongoose.model("User", userSchema);
