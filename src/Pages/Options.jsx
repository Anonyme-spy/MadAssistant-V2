import "../css/option.scss";
import OptionCard from "../components/OptionCard.jsx";

const Options = () => {
  return (
    <div className="option-page">
      <section>
        <h2>
          leading companies
          <br />
          have trusted us
        </h2>
        <div className="container">
          <OptionCard
            image="/images/docteur.jpg"
            title="Docteur"
            description="Fill out the form and the algorithm will offer the right team of experts"
            tags={["Doctora", "Amboijatovo", "Clinic"]}
            color="#f0f8ff"
            link="#"
          />
          <OptionCard
            image="/images/Police.jpg"
            title="Police"
            description="Development of custom mobile applications"
            tags={["Securité", "Aide"]}
            color="#fff5ee"
            link="#"
          />
          <OptionCard
            image="/images/santer.jpg"
            title="Hospital"
            description="Modern and responsive web design solutions"
            tags={["Urgence"]}
            color="#f0fff0"
            link="#"
          />
        </div>
      </section>
    </div>
  );
};

export default Options;
