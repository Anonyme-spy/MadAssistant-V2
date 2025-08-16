import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import santeDataFr from "../../db/json/sante.json";
import santeDataEn from "../../db/json/sante-en.json";

const Sante = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const santeData = i18n.language === "en" ? santeDataEn : santeDataFr;
  const formattedData = Object.values(santeData);

  return (
    <div className="projcard-container">
      <h1>{t("health.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Sante;
