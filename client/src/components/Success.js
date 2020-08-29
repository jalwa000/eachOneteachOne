import React, { Component } from "react";
import photo from "./image/welcome.png";

class Success extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className=" col-sm-12 d-flex justify-content-center row mt-5">
            <h1 >
              WelCome To The Learning Community
          </h1>

            <img className="mt-5" src={photo} alt="photo1" />
          </div>
        </div>
      </div>

    );
  }
}

export default Success;
