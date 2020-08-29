import React from "react";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import List from "./components/list";
import Webcam from "./components/Webcam";
import Registeration from "./components/Registeration";
import Nav from "./components/Nav";
import AddForm from "./components/AddForm";
//import Home from "./components/Home";
import Success from "./components/Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from "./components/notfound";
import NavGerman from "./components/navGerman";

import Mailer from "./components/mailer";
import Protected from "./components/Protected";

export class App extends React.Component {
  state = {
    reRender: false,
    lang: "Eng",
    emailReciever: "",
  };

  setEmailReciever = (email) => {
    this.setState({ ...this.state, emailReciever: email });
  };

  reRender = () => {
    this.setState({ reRender: true });
  };

  setLang = (language) => {
    this.setState({ lang: language });
  };
  render() {
    return (
      <Router>
        <div>
          {" "}
          {this.state.lang === "Eng" ? (
            <Nav setLang={this.setLang} />
          ) : (
            <NavGerman setLang={this.setLang} />
          )}
          <Switch>
            <Route path="/" exact component={Body} />
            {/* <Route path="/users" exact component={Home} /> */}
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Aboutus" exact component={Aboutus} />
            <Route path="/Login" exact component={Login} />
            <Route path="/list/Login" exact component={Login} />

            <Route path="/registration" exact component={Registeration} />
            <Protected path="/list/:filter" exact component={List} />
            <Protected path="/Webcam" exact component={Webcam} />
            <Protected path="/form" exact component={AddForm} />
            <Route path="/Success" exact component={Success} />
            <Protected path="/mailer" exact component={Mailer} />
            <Route exact component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
