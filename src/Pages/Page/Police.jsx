import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import policeDataFr from "../../db/json/Polices.json";
import policeDataEn from "../../db/json/Polices-en.json";

const Police = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const policeData = i18n.language === "en" ? policeDataEn : policeDataFr;
  const formattedData = Object.values(policeData);

  return (
    <div className="projcard-container">
      <h1>{t("police.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Police;
