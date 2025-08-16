import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import nurseDataFr from "../../db/json/nurse.json";
import nurseDataEn from "../../db/json/nurse-en.json";

const Nurse = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const nurseData = i18n.language === "en" ? nurseDataEn : nurseDataFr;
  const formattedData = Object.values(nurseData);

  return (
    <div className="projcard-container">
      <h1>{t("nurse.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Nurse;
