import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import vetoDataFr from "../../db/json/veto.json";
import vetoDataEn from "../../db/json/veto-en.json";

const Veto = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const vetoData = i18n.language === "en" ? vetoDataEn : vetoDataFr;
  const formattedData = Object.values(vetoData);

  return (
    <div className="projcard-container">
      <h1>{t("veterinary.title")}</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Veto;
