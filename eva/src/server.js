const express = require("express");
const app = express();
const connect = require("./config/db");
//const userControler = require("./controler/user.controler")
const   userControler = require("./controler/user.controler.js")
app.use(express.json());

const start = async () => {
    await connect();
    app.listen(500, async function () {
      console.log("listening on port 500");
    });
  };
  module.exports = start;




  