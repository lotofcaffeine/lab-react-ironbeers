import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <div
        className="ui secondary menu navbar"
        style={{ backgroundColor: "#f2f2f2", textAlign: "center" }}
      >
        <Link className="active item" to={`/`}>
          <i className="fas fa-beer"></i>
        </Link>
      </div>
    );
  }
}

export default NavBar;
