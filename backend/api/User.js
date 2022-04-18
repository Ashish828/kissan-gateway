const express = require("express");
const router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcrypt");

// signin
router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  if (email == "" || password == "") {
    res.json({
      status: "FAILED",
      message: "Empty inputs!!!",
    });
  } else {
    //check if user already exist
    User.find({ email })
      .then((data) => {
        if (data) {
          // check if password matches
          const hashedPassword = data[0].password;
          bcrypt.compare(password, hashedPassword).then((result) => {
            if (result) {
              // password matched
              res.json({
                status: "SUCCESS",
                message: "sign in success",
                data: data,
              });
            } else {
              // password not matched
              res.json({
                status: "FAILED",
                message: "Incorrect email or password",
              });
            }
          });
        } else {
          res.json({
            status: "FAILED",
            message: "Incorrect email or password",
          });
        }
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "user doesn't exist",
        });
      });
  }
});

module.exports = router;
