import React, { Component } from "react";
import CKEditor from "react-ckeditor-component";
const Axios = require("axios").default;

class Mailer extends Component {
  state = {
    emailInfo: {
      sender: "",
      reciever: "",
      subject: "",
      message: "",
    },
  };

  changeHandler = (e) => {
    this.setState({
      ...this.state,
      emailInfo: {
        ...this.state.emailInfo,
        [e.target.name]: e.target.value,
      },
    });
  };
  componentDidMount() {
    this.setState({
      ...this.state,
      emailInfo: {
        ...this.state.emailInfo,
        reciever: this.props.history.location.state.trainerEmail,
      },
    });
  }

  submitForm = (emailObj) => {
    Axios.post("http://localhost:5000/mailer/mailer", emailObj).then((res) =>
      console.log(res)
    );
  };
  render() {
    return (
      <div
        className="container">
        <div className="row mt-5">
          <div className="col-lg-2 col-sm-12"></div>
          <div className="col-lg-8 col-sm-12 d-flex justify-content-center mt-5 "
            style={{ color: "#e6e600", backgroundColor: "#006600" }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.submitForm(this.state.emailInfo);
                this.props.history.push("/");
              }}
              className="p-5"
            >
              <h5 className="ml-4," style={{ textAlign: 'center' }}>Send Message</h5>

              <div className="form-group ">
                {" "}
                {/* sender  input */}
                <label>FROM:</label>
                <input
                  type="email"
                  id="sender"
                  name="sender"
                  placeholder="example@email.com"
                  className="form-control"
                  onChange={this.changeHandler}
                />{" "}
                {/* reciever email input */}
                <input
                  type="email"
                  id="reciever"
                  placeholder=" example@mail.com"
                  className="form-control"
                  defaultValue={this.props.history.location.trainerEmail}
                  hidden
                />
              </div>
              <div className="form-group">
                <label>subject:</label> {/* subject input */}
                <input
                  type="text"
                  name="subject"
                  placeholder=" subject"
                  className="form-control"
                  onChange={this.changeHandler}
                />
              </div>

              <div className="form-group">
                {" "}
                {/* message input */}
                <label>message:</label>
                <CKEditor
                  type="textarea"
                  name="message"
                  placeholder="type  your message here ..."
                  className="form-control"
                  onChange={this.changeHandler}
                />
              </div>

              <input
                type="submit"
                className="btn btn-warning form-control mt-4 "
                value="Submit"


              />
            </form>

          </div>
          <div className="col-lg-2 col-sm-12"></div>
        </div>

      </div >
    );
  }
}

export default Mailer;
