var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  dob: { type: Date },
  pass: { type: String },
});

var usersModel = mongoose.model("User", userSchema);
module.exports = usersModel;
