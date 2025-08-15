import { useEffect } from "react";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import policeData from "../../db/json/Polices.json";

const Police = () => {
  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  // Les données sont déjà au format ElementCard, pas besoin de transformation
  const formattedData = Object.values(policeData);

  return (
    <div className="projcard-container">
      <h1>Services de Police</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Police;
