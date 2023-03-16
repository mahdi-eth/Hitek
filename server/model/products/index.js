const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    brand: { type: String, ref: "Brands", required: true, index: true },
    rating: { type: Number, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    features: {
        memory: { type: String, required: true },
        processor: { type: String, required: true },
        os: { type: String, required: true },
        cpu: { type: String, required: true, index: true }
    },
    image: { type: String, required: true },
    totalReviews: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    colors: { type: [String], required: true },
    available: { type: Boolean, required: true }
});

module.exports = mongoose.model("Products", productSchema);
