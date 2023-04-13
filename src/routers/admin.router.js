const admin = require("express").Router();

// admin.use("/users", require("./users.router"));
admin.use("/categories", require("./categories.router"));

module.exports = admin;
