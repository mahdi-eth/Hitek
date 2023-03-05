// Requremnts
const express = require("express");
const server = express();
const appRootPath = require("app-root-path");

// Configurations
require("dotenv").config({
    path: appRootPath + "/config/env/.env"
});

const { port } = process.env;

// Handlers
server.use("/api", require("./routes").signup);

server.listen(port, () =>
    console.log(`Hitek server up & running on port ${port}!`)
);
