// Navbar.js
import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-icons">
          <a href="#" className="icon">
            <i className="material-symbols-rounded icon-heavy">notifications</i>
          </a>
          <a href="#" className="icon">
            <i className="material-symbols-rounded icon-heavy">favorite</i>
          </a>
          <a href="#" className="icon">
            <i className="material-symbols-rounded icon-heavy">shopping_cart</i>
          </a>
          <a href="#" className="icon">
            <i className="material-symbols-rounded">person</i>
          </a>
        </div>
      </nav>

      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
