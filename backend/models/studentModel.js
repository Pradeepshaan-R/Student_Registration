const mongoose = require("mongoose");

const studentsSchema = {
  username: String,
  gender: String,
  dob: String,
  email: String,
  contact: String,
  address: String,
  course: String,
  chkl: String,
};

const Student = mongoose.model("Student", studentsSchema);

module.exports = Student;
