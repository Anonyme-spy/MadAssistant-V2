import { useEffect } from "react";
import "../../css/Element.scss";
import ElementCard from "../../components/ElementCard.jsx";
import $clamp from "clamp-js";
import educationData from "../../db/json/education.json";

const Education = () => {
  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const formattedData = Object.values(educationData);

  return (
    <div className="projcard-container">
      <h1>Services Éducatifs</h1>
      {formattedData.map((card, index) => (
        <ElementCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Education;
