import "../css/option.scss";
import OptionCard from "../components/OptionCard.jsx";

const Options = () => {
  return (
    <div className="option-page">
      <section>
        <h2>
          Services d'urgence
          <br />à votre disposition
        </h2>
        <div className="container">
          <OptionCard
            image="/images/docteur.jpg"
            title="Docteur"
            description="Trouvez rapidement un médecin près de chez vous pour vos consultations médicales"
            tags={["Médecin", "Consultation", "Santé"]}
            color="#f0f8ff"
            link="/Medical"
          />
          <OptionCard
            image="/images/Police.jpg"
            title="Police"
            description="Contactez les forces de l'ordre en cas d'urgence ou pour signaler un incident"
            tags={["Sécurité", "Urgence", "Protection"]}
            color="#fff5ee"
            link="/Police"
          />
          <OptionCard
            image="/images/santer.jpg"
            title="Hôpital"
            description="Accédez aux services hospitaliers et centres de soins d'urgence"
            tags={["Urgence", "Soins", "Hôpital"]}
            color="#f0fff0"
            link="/Hospital"
          />
        </div>
      </section>
    </div>
  );
};

export default Options;
