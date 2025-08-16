import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import ambulanceDataFr from "../../db/json/ambulance.json";
import ambulanceDataEn from "../../db/json/ambulance-en.json";

const Ambulance = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const ambulanceData =
    i18n.language === "en" ? ambulanceDataEn : ambulanceDataFr;
  const formattedData = Object.values(ambulanceData).map((item) => ({
    ...item,
    description: `${item.instructions} ${t("ambulance.fields.location")}: ${item.localisation}. ${t("ambulance.fields.phone")}: ${item.telephone}`,
  }));

  return (
    <div className="projcard-container">
      <h1>{t("ambulance.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Ambulance;
