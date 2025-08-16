import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Hero.scss";
import "../css/parallax.scss";
import DownloadIcon from "../assets/download-outline.svg";
import About from "./About.jsx";
import Options from "./Options.jsx";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const { t } = useTranslation();

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
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Gérer les interactions avec les boutons
    const handleButtonInteractions = () => {
      const optionsSection = sectionsRef.current[2];
      const container = containerRef.current;

      if (optionsSection && container) {
        // Désactiver scroll-snap pendant les interactions avec les boutons
        const buttons = optionsSection.querySelectorAll("button, a");

        buttons.forEach((button) => {
          button.addEventListener("mouseenter", () => {
            container.style.scrollSnapType = "none";
            optionsSection.classList.add("interaction-mode");
          });

          button.addEventListener("mouseleave", () => {
            // Réactiver après un délai court
            setTimeout(() => {
              if (!optionsSection.matches(":hover")) {
                container.style.scrollSnapType = "y mandatory";
                optionsSection.classList.remove("interaction-mode");
              }
            }, 100);
          });
        });
      }
    };

    // Observer les changements dans le DOM pour les nouveaux boutons
    const mutationObserver = new MutationObserver(handleButtonInteractions);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    handleButtonInteractions();

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      mutationObserver.disconnect();
    };
  }, []);

  const scrollToSection = (index) => {
    const container = containerRef.current;
    if (container) {
      // Activer temporairement scroll-snap pour la navigation par dots
      container.classList.add("navigation-active");
      container.style.scrollSnapType = "y mandatory";

      sectionsRef.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Désactiver après la navigation
      setTimeout(() => {
        container.classList.remove("navigation-active");
        container.style.scrollSnapType = "none";
      }, 1000);
    }
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
            title={`${t("home.sectionTitle")} ${index + 1}`}
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
              <h1 className="heading-xl">{t("home.title")}</h1>
              <p className="paragraph">{t("home.description")}</p>
              <button className="btn btn-darken btn-inline" id="btn">
                {t("home.downloadApp")}
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
