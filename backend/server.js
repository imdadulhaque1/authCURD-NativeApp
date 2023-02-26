const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authCURD-bd");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database Connection Established!!!");
});

const usersRoute = require("./api/routes/usersRoute");

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("I am a Middleware Function!");
  next();
});

app.use("/api/users/", usersRoute);

app.get("/", (req, res) => {
  res.send("Hello ExpressJS!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
