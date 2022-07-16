import "./header2.css";
import { Link } from "react-router-dom";
import { Component } from "react";

export default class Header2 extends Component {
  componentDidMount() {
    let header = document.querySelector(".header2");
    let hamburger = document.querySelector("header nav .hamburger");
    let ul = document.querySelector("header nav ul");

    // * membuat fungsi saat hamburger di click menu akan muncul
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      ul.classList.toggle("active");
      header.classList.toggle('actived')
    });
  }

  render() {
    return (
      <header className="header2">
        <Link className="logo" to="/">
          KIR
        </Link>
        <nav>
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
