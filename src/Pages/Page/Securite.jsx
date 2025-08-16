import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import securiteDataFr from "../../db/json/securite.json";
import securiteDataEn from "../../db/json/securite-en.json";

const Securite = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const securiteData = i18n.language === "en" ? securiteDataEn : securiteDataFr;
  const formattedData = Object.values(securiteData);

  return (
    <div className="projcard-container">
      <h1>{t("security.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Securite;
