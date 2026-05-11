const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/school_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.use("/api/users", userRoute);

module.exports = app;
