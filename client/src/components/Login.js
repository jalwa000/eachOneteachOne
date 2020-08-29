import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios").default;


class Login extends Component {
  state = {
    userName: "",
    password: "",
    logins: false,
    loginf: true,
    resData: {},
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/users/login", {
        userName: this.state.userName,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userInfo", res.data);
        this.setState({ ...this.state, resData: res.data });

        const tokenPayload = JSON.parse(atob(res.data.split(".")[1]));
        console.log(tokenPayload);
        if (tokenPayload.email) {
          //redirect if token received from backend to landing page
          console.log("inside if");
          //this.props.reRender();
          window.location.href = "/Success";
        }

        if (!res.data) {
          alert("Your username or password is not correct please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Your username or password is not correct please try again.");
      });
  };

  render() {
    return (
      <div
        className="container col-lg-3  center rounded"
        style={{ marginTop: "200px" }}
      >
        <div
          className="container m-3 p-3 col-12 p-5 "
          style={{ backgroundColor: "#006600", color: "#e6e600" }}
        >
          <form onSubmit={this.submitForm}>
            <h1 className="ml-4">SIGN IN</h1>
            Email:
            <input
              type="text"
              name="userName"
              onChange={this.changeHandler}
              className="form-control mb-4"
            />
            Password:
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
              className="form-control"
            />
            <br />
            <input
              type="submit"
              style={{ backgroundColor: "#e6e600", color: "#006600" }}
              className="btn btn-success  mt-3"
              value="LOG IN"
            />
          </form>
          <>
            <p style={{ marginTop: "10px", color: "#e6e600" }}>
              if you don't have Account <br></br>
              <Link to="/registration" style={{ color: "white" }}>
                Create New Account
              </Link>{" "}

            </p>
          </>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Login;
