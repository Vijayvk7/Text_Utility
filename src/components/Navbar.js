import React, { useState } from "react";
import Textform from "./Textform";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "grey";
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  const navbarClass = `navbar navbar-expand-lg ${
    myStyle.color === "black" ? "navbar-dark" : "navbar-light"
  } bg-${myStyle.color === "black" ? "dark" : "light"}`;

  const getBtnTextColor = () => {
    const textColor = myStyle.color === "white" ? "black" : "white";
    return textColor;
  };

  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: getBtnTextColor() }}
            >
              {btnText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
