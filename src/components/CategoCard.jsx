import { useNavigate } from "react-router-dom";
import "../css/categocard.scss";

const CategoCard = ({ category, data, darkMode = false }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/category/${data.link}`);
  };

  return (
    <div className={`catego-card-container ${darkMode ? "dark-mode" : ""}`}>
      <div className={`blog-card ${category}`}>
        <div className="content-mask">
          <span className={`category ${category}`}>{data.title}</span>
          <h1>{data.title}</h1>
          <p>{data.p}</p>
          {data.description && (
            <p style={{ fontSize: "0.9em", fontStyle: "italic" }}>
              {data.description}
            </p>
          )}
          <button className="nav-button" onClick={handleNavigation}>
            Accéder au service
          </button>
          <div className="post-detail">
            <span className="icon">
              <svg
                className="svg-inline--fa fa-clock fa-w-14"
                aria-hidden="true"
                data-prefix="far"
                data-icon="clock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M256,448c-105.9,0-192-86.1-192-192S150.1,64,256,64s192,86.1,192,192S361.9,448,256,448z M313.6,228.8l-64-32c-2.3-1.2-5.1-1.2-7.4,0c-2.3,1.2-3.7,3.5-3.7,6.1v64c0,3.8,3.1,6.9,6.9,6.9h6.2c3.8,0,6.9-3.1,6.9-6.9v-54.7l54.7,27.4c3.4,1.7,7.5,0.3,9.2-3.1C323.1,233.1,317.0,230.5,313.6,228.8z"
                ></path>
              </svg>
            </span>
            <span className="date">{data.availability}</span>
          </div>
        </div>
        <div
          className="image-section"
          style={{ backgroundImage: `url(${data.i})` }}
        ></div>
      </div>
    </div>
  );
};

export default CategoCard;
