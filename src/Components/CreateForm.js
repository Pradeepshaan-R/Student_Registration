import React, { useState } from "react";
import axios from "axios";

function CreateForm() {
  const [input, setInput] = useState({
    username: "",
    gender: "",
    dob: "",
    email: "",
    contact: "",
    address: "",
    course: "",
    chkl: "",
  });

  let handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  let handleClick = (event) => {
    event.preventDefault();
    const newStudent = {
      username: input.username,
      gender: input.gender,
      dob: input.dob,
      email: input.email,
      contact: input.contact,
      address: input.address,
      course: input.course,
      chkl: input.chkl,
    };

    axios.post("http://localhost:3001/create", newStudent);
  };

  return (
    <div className="container register">
      <div className="card w-75 title">
        <div className="card-body">
          <h5 className="card-title">Student Application</h5>
          <p className="card-text">Submit your Details</p>
        </div>
      </div>
      <form>
        <div className="card w-75">
          <div className="card-body">
            <div className="body-info-ps">
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="username"
                    autocomplete="off"
                    value={input.username}
                    required=""
                  />
                  <label for="text" className="ps-lable2">
                    <span className="ps-span2">Full Name</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-75">
          <div className="card-body">
            {/* <!--------- Gender Radio Settings ---------------> */}
            <div
              id="ugender"
              className="accordion-form-gen"
              data-parent="#accordion"
            >
              <div className="card-header">
                <label>Gender</label>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  onChange={handleChange}
                  name="gender"
                  value="male"
                  id="option-1"
                />
                <input
                  type="radio"
                  onChange={handleChange}
                  name="gender"
                  value="female"
                  id="option-2"
                />
                <label className="option-1" for="option-1">
                  <div className="text">Male</div>
                  <div className="dot"></div>
                </label>
                <label className="option-2" for="option-2">
                  <div className="text">Female</div>
                  <div className="dot"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-75">
          <div className="card-body">
            <div className="body-info-ps">
              <div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    onChange={handleChange}
                    name="dob"
                    autocomplete="off"
                    value={input.dob}
                    required=""
                  />
                  <label for="date" className="ps-lable3">
                    <span className="ps-span3">Date of Birth</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-75">
          <div className="card-body">
            <div className="body-info-ps">
              <div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    name="email"
                    autocomplete="off"
                    value={input.email}
                    required=""
                  />
                  <label for="email" className="ps-lable2">
                    <span className="ps-span2">Email</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-75">
          <div className="card-body">
            <div className="body-info-ps">
              <div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    onChange={handleChange}
                    name="contact"
                    autocomplete="off"
                    value={input.contact}
                    required=""
                  />
                  <label for="number" className="ps-lable2">
                    <span className="ps-span2">Contact Number</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-75">
          <div className="card-body">
            <div className="body-info-ps">
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="address"
                    autocomplete="off"
                    value={input.address}
                    required=""
                  />
                  <label for="number" className="ps-lable2">
                    <span className="ps-span2">Address</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-75">
          <div className="card-body course">
            <div className="card-header">
              <label>Course</label>
            </div>
            <select name="course" id="course" onChange={handleChange}>
              <option value="0">Computer Network</option>
              <option value="1">Web Development</option>
              <option value="2">Information Technology</option>
              <option value="3">Business Management</option>
              <option value="4">Internet MArketing</option>
            </select>
          </div>
        </div>
        <div className="card w-75">
          <div className="card-body news">
            <div className="card-header">
              <label>How did you get to know about us?</label>
            </div>
            <div className="form-check">
              <label className="form-check-label" for="check1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check1"
                  onChange={handleChange}
                  name="chkl"
                  value="Newpaper"
                />
                Newpaper
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" for="check2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check2"
                  onChange={handleChange}
                  name="chkl"
                  value="Website"
                />
                Website
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" for="check2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check2"
                  onChange={handleChange}
                  name="chkl"
                  value="Social Media"
                />
                Social Media
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" for="check2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check2"
                  onChange={handleChange}
                  name="chkl"
                  value="Email Marketing"
                />
                Email Marketing
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" for="check2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check2"
                  onChange={handleChange}
                  name="chkl"
                  value="SMS Marketing"
                />
                SMS Marketing
              </label>
            </div>
          </div>
        </div>
        <div className="body-info-ps-btn">
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-fill btn-primary save-btn mr-3 was-validated"
            name="save"
          >
            <i className="far fa-save mr-2"></i>Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
