import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import hospitalDataFr from "../../db/json/Hospital.json";
import hospitalDataEn from "../../db/json/Hospital-en.json";

const Hospital = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const hospitalData = i18n.language === "en" ? hospitalDataEn : hospitalDataFr;
  const formattedData = Object.values(hospitalData);

  return (
    <div className="projcard-container">
      <h1>{t("hospital.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Hospital;
