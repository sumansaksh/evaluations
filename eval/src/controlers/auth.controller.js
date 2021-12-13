require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/users.models");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {
  try {
    // check if the email address provided exist
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    // if it already exists then throw error
    if (user)
      return res.status(400).json({
        status: "failed",message: " Please provide a different email address",});

    // else we will create the user we will hash the password 
    user = await User.create(req.body);

    // we will create the token
    const token = newToken(user);

    // return the user and the token
    res.status(201).json({ user, token });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const login = async (req, res) => {
  try {
    // check if the email address provided exist
    let user = await User.findOne({ email: req.body.email });

    // if it does not exist then throw error
    if (!user)
      return res.status(400).json({
        status: "failed",
        message: " Please provide correct email address and password",
      });
      
    // else we match the password
    const pass = (req.body.password)

    // if not match then throw an error
    if (!pass)
      return res.status(400).json({
        status: "failed",
        message: " Please provide correct email address and password",
      });

    // if it matches then create the token
    const token = newToken(user);

    // return the user and the token
    res.status(201).json({ user, token });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

module.exports = { register, login };
