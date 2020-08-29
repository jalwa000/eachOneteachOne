var mongoose = require("mongoose");

var courseSchema = mongoose.Schema({
  name: { type: String },
  dedication_type: { type: String },
  email: { type: String },
  catagory_type: String,
  specifications: { type: String },
});

var coursesModel = mongoose.model("Courses", courseSchema);
module.exports = coursesModel;
