const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const cors = require("cors");
const path = require("path");
const createError = require("http-errors");
const mongoose = require("mongoose");
const authenticate = require("./middleware/authenticate");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGODB_URL || null;

app.disable("x-powered-by");
app.use(morgan("dev"));
// app.use(cors({ origin: process.env.APP_URL }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// Public Route
app.use("/v1/auth", require("./routers/loginRoute"));

// Private Route
app.use("/v1/users", authenticate, require("./routers/userRoute"));
// app.use("/v1/settings", authenticate, require("./routers/settingsRoute"));

// Public Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome To Our Application",
  });
});

// setting view engine to ejs
app.set("view engine", "ejs");

// 404 not found handler
app.use((req, res, next) => {
  next(createError(404, "Your requested content was not found!"));
});

// common error handler
app.use((err, req, res, next) => {
  console.log("Global Error 500 :", err);
  error = err || { message: "500, Internal Server Error" };
  res.status(err.status || 500);
  res.json(error);
});

app.listen(PORT, () => {
  console.log(`SERVER is RUNNING http://localhost:${PORT}`);
  mongoose
    .connect(DB_URL)
    .then(() => console.log("Database connection successful!"))
    .catch((err) => console.log(err));
});
