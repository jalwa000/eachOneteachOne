import React, { Component } from "react";
import axios from "axios";
export class Home extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    console.log("users");
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        // console.log(res.data)
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1
          style={{ color: "#006600", marginTop: "50px", textAlign: "center" }}
        >
          USERS
        </h1>
        <table
          className="table center rounded"
          style={{ backgroundColor: "#006600", color: "#e6e600" }}
        >
          <thead>
            <tr>
              <th className=" ">Name</th>
              <th className=" ">Email</th>
              <th className=" ">Date Of Birth</th>
              <th className=" ">Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <td>{user.name} </td>
                <td>{user.email} </td>
                <td>{user.dob} </td>
                <td>{user.password} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
