import React, { Component } from "react";
import axios from "axios";
class List extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      email: "",
    };
  }
  componentDidMount() {
    console.log("courses");
    axios
      .get("http://localhost:5000/courses")
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

  language = (item) => ["German", "English"].includes(item.specifications);
  programming = (item) => ["javascript", "java"].includes(item.specifications);
  render() {
    console.log(this.state.email);
    const filter = this[this.props.match.params.filter] || ((item) => true);

    return (
      <div>
        <h1
          style={{ color: "#006600", marginTop: "50px", textAlign: "center" }}
        >
          List of courses
        </h1>
        <table
          className="table center rounded"
          style={{ backgroundColor: "#006600", color: "#e6e600" }}
        >
          <thead>
            <tr>
              <th className=" ">Name</th>
              <th className=" ">dedicattion_type</th>
              <th className=" ">catagory_type</th>
              <th className=" ">specification</th>
              <th className=" ">email</th>
            </tr>
          </thead>
          <tbody>
            {console.log(this.props)}
            {this.state.users.filter(filter).map((user) => (
              <tr key={user._id}>
                <td>{user.name} </td>
                <td>{user.dedication_type} </td>
                <td>{user.catagory_type} </td>
                <td>{user.specifications} </td>
                <td>
                  <button
                    style={{ backgroundColor: "#006600", color: "#e6e600" }}
                    id={user.email}
                    onClick={(e) => {
                      this.props.history.push("/mailer", {
                        trainerEmail: e.target.id,
                      });
                    }}
                  >
                    Send Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
