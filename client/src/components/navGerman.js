import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBookReader,
  faFileSignature,
  faClipboardList,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Image } from "./image/small.svg";
import { ReactComponent as Webie } from "./image/webie.svg";
import { Link } from "react-router-dom";

class NavGerman extends Component {
  myFunction = () => {
    console.log("clicked");
  };
  catHandler = (inputData) => {
    console.log(inputData);
  };
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#006600" }}
      >
        <Link to="/#" className="navbar-brand">
          <Image
            style={{
              borderRadius: "50%",
              height: "50px",
              width: "50px",
              backgroundColor: "#006600",
            }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link
                to="/"
                className="navbar-brand"
                style={{
                  color: "#e6e600",
                  border: "2px solid #e6e600",
                  width: "100px",
                  marginTop: "10px",
                }}
              >
                <FontAwesomeIcon icon={faHome} />
                Start{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-link"
                style={{
                  color: "#e6e600",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <FontAwesomeIcon icon={faFileSignature} /> Kontankt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Aboutus"
                className="nav-link"
                style={{
                  color: "#e6e600",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faInfoCircle} /> Über uns
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://openlibrary.org"
                className="nav-link"
                style={{
                  color: "#e6e600",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <FontAwesomeIcon icon={faBookReader} /> Bibliothek
              </a>
            </li>

            <li className="nav-item">
              <Link
                to="/form"
                className="nav-link"
                style={{
                  color: "#e6e600",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <FontAwesomeIcon icon={faClipboardList} /> Formular
              </Link>
            </li>

            <li className="nav-item dropdown">


              <select
                style={{
                  marginTop: "10px",
                  width: "140px",
                  height: "45px",
                  color: "#e6e600",
                  backgroundColor: "#006600",
                  border: "2px solid #e6e600",
                  marginLeft: "30px"
                }}
                onChange={(e) => {
                  window.location.href = e.target.value;
                }}
              >
                <option value="defualt"> Kurs Liste</option>
                <option value="/list/language">Sprache</option>
                <option value="/list/programming">Programmierung</option>
              </select>
            </li>
            <li className="nav-item">
              <Link to="/Webcam" className="nav-link">
                <Webie
                  style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#e6e000",
                  }}
                />

              </Link>
            </li>

            <li className="nav-item dropdown">
              <select
                onChange={(e) => {
                  this.props.setLang(e.target.value);
                }}
                style={{
                  marginTop: "10px",
                  width: "140px",
                  height: "45px",
                  color: "#e6e600",
                  backgroundColor: "#006600",
                  border: "2px solid #e6e600"
                }}
              >

                <option value="defualt"> Sprache
wählen</option>
                <option value="Eng">Englisch</option>
                <option value="Ger">Deutach</option>
                <option value="Ger">Arabisch</option>
                <option value="Ger">Persisch</option>
                <option value="Ger">Urdu</option>

              </select>
            </li>

          </ul>
          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">

                {!localStorage.getItem("userInfo") ? (
                  <li className="nav-item navbar-right ml-lg-5 pl-lg-5 ">
                    <Link
                      to="/Login"
                      className="nav-link "
                      style={{
                        color: "#e6e600",
                        marginLeft: "70px",
                        marginTop: "10px",
                        border: "2px solid #e6e600"
                      }}
                    >
                      <FontAwesomeIcon icon={faUserLock} /> Einloggen
                </Link>
                  </li>
                ) : (
                    <li onClick={() => localStorage.removeItem("userInfo")}>
                      <Link
                        to="/"
                        className="nav-link"
                        onClick={() => {
                          localStorage.removeItem("userInfo");
                          window.location.href = "/";
                        }}
                      >
                        <i
                          className="fa fa-sign-out"
                          style={{
                            fontSize: "26px",
                            color: "#e6e600",
                            margin: "5px",
                            right: "10px",

                          }} >
                          Ausloggen
                  </i>
                      </Link>
                    </li>
                  )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavGerman;
