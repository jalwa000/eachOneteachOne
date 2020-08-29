import React, { Component } from "react";

class Anima extends Component {
  render() {
    return (
      <div
        style={{
          width: "180px",
          height: "300px",
          backgroundColor: "#006600",
          fontSize: "25px",
          marginTop: "150px",
        }}
      >
        <p
          id="text"
          style={{
            marginLeft: "30px",
            marginTop: "30px",
            color: "#e6e600",
            height: "120px",
            width: "120px",
            backgroundColor: "#006600",
          }}
        >
          <span>DONATE</span> Books and other Learning Matrials
        </p>
      </div>
    );
  }
}

export default Anima;
