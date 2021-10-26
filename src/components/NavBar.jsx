import React from "react";
import navbar from "./navbar.module.css";

function NavBar(props) {
  return (
    <div>
      <h1 className={navbar.text}>NabBar</h1>
      <h1 className={navbar.fullName}>{props.name}</h1>
    </div>
  );
}

export default NavBar;
