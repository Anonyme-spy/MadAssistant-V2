import { useEffect } from "react";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import ambulanceData from "../../db/json/ambulance.json";

const Ambulance = () => {
  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const formattedData = Object.values(ambulanceData);

  return (
    <div className="projcard-container">
      <h1>Services d'Ambulance</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Ambulance;
