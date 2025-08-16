import "../css/cesily.scss";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="about-section">
        <div className="Apropos">
          <div className="paragraphe">
            <h1>{t("about.title")}</h1>
            <nav>
              {t("about.description")} <br />
              {t("about.detailedDescription")} <br />
              <ul>
                {t("about.objectivesTitle")} <br />
                <li>
                  {t("about.objectives.accessibility")} <br />
                </li>
                <li>
                  {t("about.objectives.reactionTime")} <br />
                </li>
                <li>
                  {t("about.objectives.solution")} <br />
                </li>
                <li>
                  {t("about.objectives.awareness")} <br />
                </li>
              </ul>
              <ul>
                {t("about.targetTitle")} <br />
                <li>
                  {t("about.target.citizens")} <br />
                </li>
                <li>
                  {t("about.target.tourists")} <br />
                </li>
                <li>
                  {t("about.target.professionals")} <br />
                </li>
                <li>
                  {t("about.target.organizations")} <br />
                </li>
              </ul>
            </nav>
          </div>
          <img
            src="/hacker-exploitant-illustration-icone-dessin-anime-pour-ordinateur-portable-concept-icone-technologie-isole-style-bande-dessinee-plat_138676-2387.jpg"
            alt="sced"
          />
        </div>
      </div>
    </>
  );
}

export default About;
