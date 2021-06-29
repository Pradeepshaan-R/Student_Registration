const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");

// BRING FRONT-END DATA & SEND IT TO THE DATABASE (Method: POST)
router.route("/create").post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const email = req.body.email;
  const contact = req.body.contact;
  const address = req.body.address;
  const course = req.body.course;
  const chkl = req.body.chkl;

  const newStudent = new Student({
    username,
    gender,
    dob,
    email,
    contact,
    address,
    course,
    chkl,
  });

  newStudent.save();
});

//  BRING THE DATA FROM DATABASE & DISPLAY IT IN THE FRONT - END(Method: GET)
router.route("/admin").get((req, res) => {
  Student.find().then((foundStudents) => res.json(foundStudents));
});

module.exports = router;
