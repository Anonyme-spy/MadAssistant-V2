import { useEffect, useState } from "react";
import "../css/option.scss";
import OptionCard from "../components/OptionCard";
import $clamp from "clamp-js";

const Options = () => {
  const [cardsData, setCardsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.$clamp = $clamp;
  }, []);

  const fetchCard = async () => {
    try {
      const response = await fetch("http://localhost:3210/api/cards");
      const data = await response.json();
      return data.CardData || data || {};
    } catch (error) {
      console.error("Erreur API:", error);
      return {};
    }
  };

  useEffect(() => {
    fetchCard().then((data) => {
      setCardsData(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (Object.keys(cardsData).length === 0)
    return <div>Aucune carte trouvée</div>;

  return (
    <div className="projcard-container">
      {Object.values(cardsData).map((card, index) => (
        <OptionCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Options;
