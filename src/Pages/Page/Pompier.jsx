import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import pompierDataFr from "../../db/json/Pompier.json";
import pompierDataEn from "../../db/json/Pompier-en.json";

const Pompier = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const pompierData = i18n.language === "en" ? pompierDataEn : pompierDataFr;
  const formattedData = Object.values(pompierData);

  return (
    <div className="projcard-container">
      <h1>{t("firestation.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Pompier;
