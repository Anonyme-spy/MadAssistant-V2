import { useEffect } from "react";
import "../css/option.scss";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import OptionCard from "../components/OptionCard.jsx";

const Options = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const button = document.querySelector(".view-more-button");
    const parallaxContainer = document.querySelector(".parallax-container");

    if (button && parallaxContainer) {
      const handleMouseEnter = () => {
        parallaxContainer.classList.add("interacting");
        // Optionnel: désactiver temporairement scroll-behavior
        parallaxContainer.style.scrollBehavior = "auto";
      };

      const handleMouseLeave = () => {
        parallaxContainer.classList.remove("interacting");
        // Restaurer scroll-behavior après un délai
        setTimeout(() => {
          parallaxContainer.style.scrollBehavior = "smooth";
        }, 300);
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="option-page">
      <section>
        <h2>
          {t("options.title")}
          <br />
          {t("options.subtitle")}
        </h2>
        <div className="container">
          <OptionCard
            image="/images/docteur.jpg"
            title={t("options.services.doctor.title")}
            description={t("options.services.doctor.description")}
            tags={t("options.services.doctor.tags", { returnObjects: true })}
            color="#f0f8ff"
            link="/Medical"
          />
          <OptionCard
            image="/images/Police.jpg"
            title={t("options.services.police.title")}
            description={t("options.services.police.description")}
            tags={t("options.services.police.tags", { returnObjects: true })}
            color="#fff5ee"
            link="/Police"
          />
          <OptionCard
            image="/images/santer.jpg"
            title={t("options.services.hospital.title")}
            description={t("options.services.hospital.description")}
            tags={t("options.services.hospital.tags", { returnObjects: true })}
            color="#f0fff0"
            link="/Hospital"
          />
        </div>

        <NavLink to="/category" className="view-more-button">
          <span className="button-text">{t("options.viewMore")}</span>
          <i className="fas fa-arrow-right button-icon"></i>
        </NavLink>
      </section>
    </div>
  );
};

export default Options;
