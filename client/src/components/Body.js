import React, { Component } from "react";
import { ReactComponent as Photo } from "./image/body.svg";
import Anima from "./Anima";
import { ReactComponent as Image } from "./image/qoutation.svg";
import Footer from "./Footer";
/*  */
class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center  ">
            <Anima />
          </div>

          <div className="col-lg-4 col-sm-12  d-flex justify-content-center row">
            <Photo />
            <Footer />

          </div>

          <div className="col-lg-4 col-sm-12 ">
            <Image
              style={{
                width: "450px",
                alignText: "center",
                marginTop: "180px",
                marginRight: "200px",
              }}
            />
          </div>
        </div>

      </div>

    );

  }

}

export default Body;
