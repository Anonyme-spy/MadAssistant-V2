import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import medecinDataFr from "../../db/json/medecin.json";
import medecinDataEn from "../../db/json/medecin-en.json";

const Medical = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const medecinData = i18n.language === "en" ? medecinDataEn : medecinDataFr;
  const formattedData = Object.values(medecinData);

  return (
    <div className="projcard-container">
      <h1>{t("medical.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Medical;
