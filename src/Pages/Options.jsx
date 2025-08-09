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
          <OptionCard />
          <OptionCard />
          <OptionCard />
        </div>
      </section>
    </div>
  );
};

export default Options;
