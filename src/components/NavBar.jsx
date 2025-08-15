import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../css/Hero.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle burger menu toggle
  const handleBurgerClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Handle menu link clicks
  const handleMenuLinkClick = () => {
    setIsMenuActive(false);
  };

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("darkmode");
    document.body.classList.toggle("darkmode");
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <div className="navbar-brand">
          <img src={"/logo.png"} alt={"ispm logo"} width={50} height={50} />
          <a href="#options-section" className="brand">
            MADASSISTANT
          </a>
        </div>
        <div
          className={`burger ${isMenuActive ? "is-active" : ""}`}
          onClick={handleBurgerClick}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className={`menu ${isMenuActive ? "is-active" : ""}`}>
          <ul className="menu-inner">
            <li className="menu-item">
              <NavLink
                to={"/"}
                className="menu-link"
                onClick={handleMenuLinkClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/"
                className="menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuLinkClick();
                  document
                    .getElementById("options-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Options
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to={"/Avantages"}
                className="menu-link"
                onClick={handleMenuLinkClick}
              >
                Avantages
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to={"/Contacts"}
                className="menu-link"
                onClick={handleMenuLinkClick}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={"flex align-center row gap-2"}>
          <button className="switch" onClick={handleDarkModeToggle}>
            <i className="switch-light fas fa-sun"></i>
            <i className="switch-dark fas fa-moon"></i>
          </button>
          <img src={"/ISPM-bg.png"} alt={"ispm logo"} width={50} height={50} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
