require("dotenv").config({
  path: ".env",
});

const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

app.use("/", require("./src/routers"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
