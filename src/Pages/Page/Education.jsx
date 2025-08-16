import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import educationDataFr from "../../db/json/education.json";
import educationDataEn from "../../db/json/education-en.json";

const Education = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const educationData =
    i18n.language === "en" ? educationDataEn : educationDataFr;
  const formattedData = Object.values(educationData);

  return (
    <div className="projcard-container">
      <h1>{t("education.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Education;
