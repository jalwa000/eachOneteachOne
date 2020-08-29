const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
var model = require("../model");
var courseModel = mongoose.model("Courses");

/*to get list of courses */
router.get("/", (req, res, next) => {
  courseModel.find({ dedication_type: "trainer" }).then((data) => {
    res.send(data);
  });
});

router.post("/Addfrom", (req, res, next) => {
  console.log(req.body);
  const course = new courseModel({
    name: req.body.name,
    dedication_type: req.body.dedication_type,
    email: req.body.email,
    catagory_type: req.body.catagory_type,
    specifications: req.body.specifications,
  });

  course.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data inserted");
      res.send(result);
    }
  });
});

module.exports = router;
