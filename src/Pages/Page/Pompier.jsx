import { useEffect } from "react";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import pompierData from "../../db/json/Pompier.json";

const Pompier = () => {
  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const formattedData = Object.values(pompierData);

  return (
    <div className="projcard-container">
      <h1>Services de Pompiers</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Pompier;
