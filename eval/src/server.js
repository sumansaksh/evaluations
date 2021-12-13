const express = require("express");
const app = express();
const connect = require("./config/db");
const usersController = require("./controlers/user.controler");
const { register, login } = require("./controlers/auth.controller");
const moviesController = require("./controlers/movie.controlers");


app.use(express.json());

app.use("/users",usersController);
app.use("/movies",moviesController);

app.post("/register", register);
app.post("/login", login);

const start = async () => {
  await connect();
  app.listen(500, async function () {
    console.log("listening on port 500");
  });
};
module.exports = start;
