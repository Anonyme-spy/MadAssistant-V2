import "../css/cesily.scss";

function About() {
  return (
    <>
      <div className="about-section">
        <div className="Apropos">
          <div className="paragraphe">
            <h1>Qu'est-ce que MadAssistant ? </h1>
            <nav>
              MadAssistant est un site web conçu pour centraliser et faciliter
              l'accès aux numéros et contacts d'urgence à Madagascar. <br />
              Il est pensé pour être simple d'utilisation, accessible même avec
              une faible connexion internet, et compatible avec tous les
              appareils. <br />
              <ul>
                Ses objectifs principaux : <br />
                <li>
                  Rendre les numéros d'urgence plus accessibles, surtout en
                  zones reculées. <br />
                </li>
                <li>
                  Réduire le temps de réaction grâce à une interface claire et
                  rapide. <br />
                </li>
                <li>
                  Offrir une solution gratuite, moderne et adaptée au contexte
                  local. <br />
                </li>
                <li>
                  Sensibiliser le public à certains services encore méconnus.{" "}
                  <br />
                </li>
              </ul>
              <ul>
                Le public visé : <br />
                <li>
                  Les citoyens ayant besoin d'un contact d'urgence. <br />
                </li>
                <li>
                  Les touristes ne connaissant pas les services disponibles.{" "}
                  <br />
                </li>
                <li>
                  Les professionnels de la santé et de la sécurité pour un accès
                  rapide aux contacts utiles. <br />
                </li>
                <li>
                  Les administrations et ONG pour coordonner leurs
                  interventions. <br />
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
