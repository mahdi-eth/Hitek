// Requremnts
const express = require("express");
const server = express();
const appRootPath = require("app-root-path");
const mongoose = require("mongoose");
const cors = require("cors");
const { createNewBrand } = require("./controller/brands");
const { randomProducts, createProducts } = require("./controller/products");

// Configurations
require("dotenv").config({
    path: appRootPath + "/config/env/.env"
});

server.use(cors());
server.use(express.json({ extended: false }));
server.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_ADDRESS || "mongodb://localhost:27017/hitek");

// Handlers
createNewBrand();
createProducts();

server.use("/api", require("./routes").signup);
server.use("/api", require("./routes").signin);
server.use("/api", require("./routes").header);
server.use("/api", require("./routes").products);
server.use("/api", require("./routes").filters);
server.use("/api", require("./routes").headerFilter);
server.use("/api", require("./routes").addToBasket);
server.use("/api", require("./routes").contactus);
server.use("/api", require("./routes").singleProduct);



server.listen(process.env.PORT || 3000, () =>
    console.log(
        `Hitek server up & running on port ${process.env.PORT || 3000}!`
    )
);
