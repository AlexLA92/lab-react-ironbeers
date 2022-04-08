import React from "react";
import "./Header.css";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
    </header>
  );
}

export default Header;
