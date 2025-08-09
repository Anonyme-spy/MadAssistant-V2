import React from "react";
import "../css/Hero.scss";
import DownloadIcon from "../assets/download-outline.svg";
import Contacts from "../Pages/Contacts.jsx";
import Options from "../Pages/Options.jsx";

export default function Home() {
  return (
    <>
      <main className="main min-h-[100vh] flex flex-col justify-start scroll-auto">
        <section className="section banner banner-section" id="banner-section">
          <div className="container banner-column">
            <img
              className="banner-image"
              src="/Service%20client.jpeg"
              alt="Illustration"
            />
            <div className="banner-inner">
              <h1 className="heading-xl">MadAssistant</h1>
              <p className="paragraph">
                Dans des situations d'urgence, chaque seconde compte. Pourtant,
                beaucoup de personnes ne savent pas toujours où trouver
                rapidement les numéros d'urgence ou les informations
                essentielles.
              </p>
              <button className="btn btn-darken btn-inline" id="btn">
                Télécharger l'app
                <img src={DownloadIcon} alt="Download" width="24" height="24" />
              </button>
            </div>
          </div>
        </section>
        <section className="section options-section" id="options-section">
          <Options />
        </section>
        <section className="section contacts-section" id="contacts-section">
          <Contacts />
        </section>
      </main>
    </>
  );
}
