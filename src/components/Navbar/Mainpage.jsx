import { useState } from "react";
import "./Mainpage.css";

export default function Mainpage() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      {/* NAVBAR DESKTOP VIEW */}
      <nav className="flex between wrapper navbar">
        <a href="#">
          <span className="logo">AustinE</span>
        </a>

        <ul className="flex gap-4 between desktop-menu">
          <li>
            <a href="#" className="links">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="links">
              About
            </a>
          </li>
          <li>
            <a href="#" className="links">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="links">
              Design
            </a>
          </li>
          <li>
            <a href="#" className="links">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex nav-action">
          <input type="text" placeholder="Type to search" className="search" />
          <a href="#">
            <button className="srch-btn">Search</button>
          </a>
          <a href="#" className="hamburger" onClick={toggleMenu}>
            {isMenuActive ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )}
          </a>
        </div>
      </nav>

      {/* NAVBAR MOBILE VIEW */}
      <ul
        className={`mobile-menu ${isMenuActive ? "mobile-menu-active" : null}`}
      >
        <li>
          <a href="#" className="links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="links">
            About
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Design
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Contact
          </a>
        </li>
        <div className="mobile-nav-action">
          <input type="text" placeholder="Type to search" className="search" />
          <a href="#">
            <button className="srch-btn">Search</button>
          </a>
        </div>
      </ul>

      <div className="hero-container flex between wrapper gap-4">
        <div className="content">
          <h2 className="main-text">
            Web Design & <br />{" "}
            <span className="text-w-main-clr">Development</span> <br /> Course
          </h2>

          <p className="sub-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            suscipit vel at! Consectetur corrupti laborum earum praesentium
            repellendus. Nesciunt dolorem, eos laboriosam tenetur neque sint nam
            possimus nemo autem recusandae.
          </p>
          <button className="join-btn">JOIN US</button>
        </div>

        <div class="form">
          <h2>Login Here</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />{" "}
          <br />
          <button class="login">
            <a href="#">Login</a>
          </button>
          <p class="account">
            Don't have an account? <br />
            <a href="#">Sign up</a> here
          </p>
          <p class="liw">Login with</p>
          <div class="icons">
            <a>
              <i className="fab fa-facebook"></i>
            </a>
            <a>
              <i className="fab fa-instagram"></i>
            </a>
            <a>
              <i className="fab fa-x-twitter"></i>
            </a>
            <a>
              <i className="fab fa-google"></i>
            </a>
            <a>
              <i className="fab fa-skype"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
