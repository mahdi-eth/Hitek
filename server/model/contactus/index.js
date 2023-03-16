const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    country: { type: String, required: true },
    message: { type: String, required: true },
});

module.exports = mongoose.model("Contactus", contactusSchema);
