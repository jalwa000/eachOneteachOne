const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://hafeez:khattak76@cluster1-wpxqn.mongodb.net/learning?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
      if (!err) {
        console.log("Successfully Connected! ");
      } else {
        console.log("Error connecting to database. ");
      }
    }
  );
} catch (err) {
  console.log(err);
}

const userModel = require("./users.model");
const coursesModel = require("./courses.model");
