import React, { Component } from "react";
const axios = require("axios").default;

class Form extends Component {
  state = {
    name: "",
    dedication_type: "",
    email: "",
    catagory_type: "",
    specifications: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/courses/Addfrom", {
        name: this.state.name,
        dedication_type: this.state.dedication_type,
        email: this.state.email,
        catagory_type: this.state.catagory_type,
        specifications: this.state.specifications,
      })
      .then((res) => {
        console.log(res);
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div
        className="container col-3 center  mt-5 rounded"
        style={{ color: "#e6e600", backgroundColor: "#006600" }}
      >
        <form onSubmit={this.submitForm} className="p-5">
          <h5 className="ml-4">Fill in form of your choice</h5>
          <div className="form-group ">
            {" "}
            {/* name input */}
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="full name..."
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>dedication_type:</label> {/*  dedication_type input */}
            <input
              type="text"
              name="dedication_type"
              placeholder="Trainer/Trainee"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>email:</label> {/* email input */}
            <input
              type="int"
              name="email"
              placeholder=" email address"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>category_type:</label> {/*  catagory_type input */}
            <input
              type="text"
              name="catagory_type"
              placeholder=" Programme/langauge"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            {" "}
            {/* specifications input */}
            <label>specification:</label>
            <input
              type="text"
              name="specifications"
              placeholder="exact description"
              className="form-control"
              onChange={this.onChange}
            />
          </div>

          <input
            type="submit"
            className="btn btn-warning form-control mt-4"
            value="Submit"
          />
        </form>
        <span dangerouslySetInnerHTML={{ "__html": "&copy;Abdul Hafeez Khattak" }} />
      </div>
    );
  }
}

export default Form;
