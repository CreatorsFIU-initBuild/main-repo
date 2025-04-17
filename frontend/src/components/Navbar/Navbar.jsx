// Navbar.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./navbar.css";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [user] = useAuthState(auth);

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

  const handleProfileClick = () => {
    if (user) {
      navigate('/dashboard/profile');
    } else {
      navigate('/login');
    }
  };

  const handleNotificationsClick = () => {
    if (user) {
      navigate('/dashboard/notifications');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>
        <div className="nav-icons">
          <a href="#" className="icon">
            <i className="material-symbols-rounded icon-heavy" onClick={handleNotificationsClick}>notifications</i>
          </a>
          <a href="#" className="icon">
            <i className="material-symbols-rounded icon-heavy" onClick={() => navigate('/dashboard/favorites')} >favorite</i>
          </a>
          <a href="#" className="icon">
            <i className="material-symbols-rounded icon-heavy" onClick={() => navigate('/dashboard/cart')} >shopping_cart</i>
          </a>
          <a href="#" className="icon">
            <i className="material-symbols-rounded" onClick={handleProfileClick}>person</i>
          </a>
        </div>
      </nav>

      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
