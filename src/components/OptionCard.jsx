import { NavLink } from "react-router-dom";

const OptionCard = ({
  image = "/S.png",
  title = "Default Title",
  description = "Default description",
  tags = [],
  link = "#",
  color = "#fff",
}) => {
  // Couleurs prédéfinies pour les tags (maximum 3)
  const tagColors = [
    { bg: "#d3b19a", class: "branding" },
    { bg: "#70b3b1", class: "packaging" },
    { bg: "#d05fa2", class: "marketing" },
  ];

  // Limiter à 3 tags maximum
  const limitedTags = tags.slice(0, 3);

  return (
    <div className="card">
      <div className="card-inner" style={{ "--clr": color }}>
        <div className="box">
          <div className="imgBox">
            <img src={image} alt={title} />
          </div>
          <div className="icon">
            <NavLink to={link} className="iconBox">
              <i className="fas fa-external-link-alt"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Afficher la liste seulement si des tags sont fournis */}
        {limitedTags.length > 0 && (
          <ul>
            {limitedTags.map((tag, index) => (
              <li
                key={index}
                style={{ "--clr-tag": tagColors[index].bg }}
                className={tagColors[index].class}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OptionCard;
