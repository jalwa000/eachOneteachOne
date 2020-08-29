import React, { Component } from "react";
import "../components/app.css";

class Webcam extends Component {
  constructor(props) {
    super(props);
    this.streamCamVideo = this.streamCamVideo.bind(this);
  }
  streamCamVideo() {
    var constraints = {
      audio: false,
      video: { width: 1280, height: 720 },
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center row mt-5">
            <video autoPlay={true} id="videoElement" controls></video>
          </div>
          <br />
          <div className="col-sm-12 d-flex justify-content-center row ">
            <button onClick={this.streamCamVideo}>Start streaming</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Webcam;
