import { useEffect } from "react";
import "../css/Element.scss";
import PropTypes from "prop-types";

const ElementCard = ({
  colorClass,
  customColor,
  imgSrc,
  title,
  subtitle,
  description,
  tags,
}) => {
  useEffect(() => {
    // This adds some nice ellipsis to the description:
    document.querySelectorAll(".projcard-description").forEach(function (box) {
      if (window.$clamp) {
        window.$clamp(box, { clamp: 6 });
      }
    });
  }, []);

  // Déterminer la classe de couleur à utiliser
  const cardColorClass = customColor
    ? "projcard-customcolor"
    : colorClass
      ? `projcard-${colorClass}`
      : "projcard-blue";

  return (
    <div
      className={`projcard ${cardColorClass}`}
      style={customColor ? { "--projcard-color": customColor } : {}}
    >
      <div className="projcard-innerbox">
        <img
          className="projcard-img"
          src={imgSrc}
          alt={title || "Carte projet"}
        />
        <div className="projcard-textbox">
          <div className="projcard-title">{title}</div>
          <div className="projcard-subtitle">{subtitle}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{description}</div>
          <div className="projcard-tagbox">
            {tags &&
              tags.map((tag, index) => (
                <span key={index} className="projcard-tag">
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ElementCard.propTypes = {
  colorClass: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "brown",
    "grey",
  ]),
  customColor: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ElementCard.defaultProps = {
  colorClass: "blue",
  subtitle: "",
  tags: [],
};

export default ElementCard;
