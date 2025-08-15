import { useEffect } from "react";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import santeData from "../../db/json/sante.json";

const Sante = () => {
  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const formattedData = Object.values(santeData);

  return (
    <div className="projcard-container">
      <h1>Services de Santé</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Sante;
