const express = require("express");
const app = express();
const morgan = require("morgan");
const userModel = require("./models/user");
const dbConnection = require("./config/db");

app.use(morgan("dev"));

app.set("view engine", "ejs");

app.use((req, res, next) => {
  //   console.log("This is the middleware");
  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/register", (req, res) => {
  res.render("register");
});

app.get(
  "/",
  //   (req, res, next) => {
  //     const a = 9;
  //     const b = 8;
  //     console.log(a + b);
  //     next();
  //   },
  (req, res) => {
    res.render("index");
  }
);
app.get("/about", (req, res) => {
  res.send("This is the about page");
});
app.get("/profile", (req, res) => {
  res.send("This is the profile page");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Form data received");
});

app.listen(3000);
