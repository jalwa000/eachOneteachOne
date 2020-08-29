import React, { Component } from "react";


export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="footer">
            <ul className="main">
              <p style={{ color: "#e6e600" }}>follow us</p>
              <li>
                <a className="active" href="/#">
                  |<i className="fa fa-fw fa-facebook "></i>facebook
            </a>
              </li>
              <li>
                <a className="active" href="/#">
                  |<i className="fa fa-fw fa-twitter"></i>Twitter
            </a>
              </li>
              <li>

                <a className="active" href="/#">
                  |<i className="fa fa-fw fa-youtube"></i>Youtube
            </a>
              </li>
            </ul>
          </div>
        </div >
      </div>
    );
  }
}

export default Footer;
