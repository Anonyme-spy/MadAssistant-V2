import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Hero.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  // Handle language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

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
        <div className="navbar-brand flex items-center gap-3">
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
                {t("nav.accueil")}
              </NavLink>
            </li>
            <li className="menu-item">
              <a
                href="/#options-section"
                className="menu-link"
                onClick={handleMenuLinkClick}
              >
                {t("nav.options")}
              </a>
            </li>
            <li className="menu-item">
              <NavLink
                to={"/Avantages"}
                className="menu-link"
                onClick={handleMenuLinkClick}
              >
                {t("nav.avantages")}
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to={"/Contacts"}
                className="menu-link"
                onClick={handleMenuLinkClick}
              >
                {t("nav.contacts")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button
            className="language-switch group"
            onClick={toggleLanguage}
            title={`Switch to ${i18n.language === "fr" ? "English" : "Français"}`}
          >
            <span className="language-text">{i18n.language.toUpperCase()}</span>
            <div className="language-icon"></div>
          </button>
          <button className="switch" onClick={handleDarkModeToggle}>
            <i className="switch-light fas fa-sun"></i>
            <i className="switch-dark fas fa-moon"></i>
          </button>
          <img
            src={"/ISPM-bg.png"}
            alt={"ispm logo"}
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
