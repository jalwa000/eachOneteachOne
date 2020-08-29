var router = require("express").Router();
const mongoose = require("mongoose");
var model = require("../model");
const userModel = mongoose.model("User");
//const validator = require('validator');
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

/*to get users */
router.get("/", (req, res, next) => {
  userModel.find().then((data) => {
    res.send(data);
  });
});

// Register
//...........................................
router.post("/register", (req, res, next) => {
  var userInfo = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(userInfo.pass, salt, function (err, hash) {
      const userDetials = new userModel({
        name: userInfo.name,
        email: userInfo.email,
        dob: userInfo.dob,
        pass: hash,
      });

      userDetials.save((err, result) => {
        if (!err) {
          console.log("successfully inserted.");
          console.log(result);
          var token = jwt.sign({ userInfo: result }, "userInfo");
          res.send(token);
        } else {
          console.log(err);
        }
      });
    });
  });
});

//login

//.................................
router.post("/login", (req, res, next) => {
  try {
    userModel.findOne({ email: req.body.userName }, (err, result) => {
      if (err) {
        res.status(403).send("FindOne Problem");
      } else if (result) {
        console.log(result);
        bcrypt.compare(req.body.password, result.pass, function (
          compareErr,
          compareRes
        ) {
          if (compareErr) {
            res.status(403).send(compareErr);
          }
          // result == true
          const Token = jwt.sign(
            {
              email: result.email,
              name: result.name,
              dob: result.dob,
            },
            "mysecretkey"
          );
          localStorage.setItem("Token", Token);
          res.send(Token);
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//logout

//.................................
router.get("/logout", (req, res) => {
  localStorage.removeItem(Token);
  res.send("logged out successfully");
});

module.exports = router;
