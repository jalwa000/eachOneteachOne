import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios").default;


class Registeration extends Component {
  state = {
    name: "",
    email: "",
    dob: "",
    password: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/register", {
        name: this.state.name,
        email: this.state.email,
        dob: this.state.dob,
        pass: this.state.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userInfo", res.data);
        this.props.history.push("/success");
      });
  };

  render() {
    return (
      <div
        className="container col-3 center  mt-5 rounded"
        style={{ color: "#e6e600", backgroundColor: "#006600" }}
      >
        <form onSubmit={this.submitForm} className="p-5">
          <h1 className="ml-4">SIGN UP</h1>

          <div className="form-group ">
            <label>Name</label> {/* name input */}
            <input
              type="text"
              name="name"
              placeholder="user name..."
              required
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email ID</label> {/*  email input */}
            <input
              type="text"
              name="email"
              placeholder="Email Address..."
              required
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>D.O.B</label> {/*  DOB input */}
            <input
              type="int"
              name="dob"
              placeholder=" 20.10.2010"
              required
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            {" "}
            {/* password input */}
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="******"
              required
              className="form-control"
              onChange={this.onChange}
            />
          </div>

          <input
            type="submit"
            className="btn btn-warning form-control mt-4"
            value="Submit"
          />
          <>
            <p style={{ marginTop: "10px", color: "#e6e600" }}>
              Already  have Account ? <br></br>
              <Link to="/Login" style={{ color: "white" }}>
                Login Here
              </Link>

            </p>
          </>

        </form>

      </div>
    );
  }
}

export default Registeration;
