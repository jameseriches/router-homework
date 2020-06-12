import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink exact activeStyle={{ color: "blue" }} to="/">
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "blue" }} to="/ContactUs">
          Contact Us Page
        </NavLink>
        <NavLink activeStyle={{ color: "blue" }} to="/Posts">
          Posts
        </NavLink>
      </div>
    );
  }
}