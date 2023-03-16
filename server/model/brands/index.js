const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  macbook: { type: Boolean, default: false },
  tablet: { type: Boolean, default: false },
  iphone: { type: Boolean, default: false },
  phone: { type: Boolean, default: false },
});

module.exports = mongoose.model("Brands", brandSchema);