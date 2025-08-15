import { useEffect } from "react";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import medecinData from "../../db/json/medecin.json";

const Medical = () => {
  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const formattedData = Object.values(medecinData);

  return (
    <div className="projcard-container">
      <h1>Médecins</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Medical;
