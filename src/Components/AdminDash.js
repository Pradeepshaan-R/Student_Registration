import React, { useEffect, useState } from "react";

function AdminDash() {
  // USESTATE HOOK
  const [students, setStudents] = useState([
    {
      username: "",
      gender: "",
      dob: "",
      email: "",
      contact: "",
      address: "",
      course: "",
      chkl: "",
    },
  ]);

  useEffect(() => {
    fetch("/admin")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStudents(jsonRes));
  });

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Admin Panel</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Username</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Course</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.username}</td>
                <td>{student.gender}</td>
                <td>{student.dob}</td>
                <td>{student.email}</td>
                <td>{student.contact}</td>
                <td>{student.address}</td>
                <td>{student.course}</td>
                <td>{student.chkl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDash;
