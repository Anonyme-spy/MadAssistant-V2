import React, { useEffect, useRef, useState } from "react";
import "../css/Hero.scss";
import "../css/parallax.scss";
import DownloadIcon from "../assets/download-outline.svg";
import About from "./About.jsx";
import Options from "./Options.jsx";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  const sections = [
    { id: "banner", component: "banner" },
    { id: "about", component: "about" },
    { id: "options", component: "options" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionsRef.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setActiveSection(index);
            entry.target.classList.add("active");
            entry.target
              .querySelector(".section-content")
              ?.classList.add("animate-in");
          } else {
            entry.target.classList.remove("active");
            entry.target
              .querySelector(".section-content")
              ?.classList.remove("animate-in");
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-5% 0px",
      },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="parallax-container" ref={containerRef}>
      {/* Navigation dots */}
      <div className="section-navigation">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${activeSection === index ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
            title={`Section ${index + 1}`}
          />
        ))}
      </div>

      {/* Banner Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="parallax-section banner-section"
        id="banner-section"
      >
        <div className="section-content">
          <div className="container banner-column">
            <img
              className="banner-image"
              src="/Service%20client.jpeg"
              alt="Illustration"
            />
            <div className="banner-inner">
              <h1 className="heading-xl">MadAssistant</h1>
              <p className="paragraph">
                Dans des situations d'urgence, chaque seconde compte. Pourtant,
                beaucoup de personnes ne savent pas toujours où trouver
                rapidement les numéros d'urgence ou les informations
                essentielles.
              </p>
              <button className="btn btn-darken btn-inline" id="btn">
                Télécharger l'app
                <img src={DownloadIcon} alt="Download" width="24" height="24" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="parallax-section about-section"
        id="about-section"
      >
        <div className="section-content">
          <About />
        </div>
      </section>

      {/* Options Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="parallax-section options-section"
        id="options-section"
      >
        <div className="section-content">
          <Options />
        </div>
      </section>
    </div>
  );
}
