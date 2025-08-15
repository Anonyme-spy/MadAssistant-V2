import { useEffect } from "react";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import securiteData from "../../db/json/securite.json";

const Securite = () => {
  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const formattedData = Object.values(securiteData);

  return (
    <div className="projcard-container">
      <h1>Services de Sécurité</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Securite;
