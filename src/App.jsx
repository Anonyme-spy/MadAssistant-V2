import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Element from "./Pages/element.jsx";
import Category from "./Pages/Category.jsx";
import Hospital from "./Pages/Page/Hospital.jsx";
import Police from "./Pages/Page/Police.jsx";
import Pompier from "./Pages/Page/Pompier.jsx";
import Nurse from "./Pages/Page/Nurse.jsx";
import Medical from "./Pages/Page/Medical.jsx";
import Veterinary from "./Pages/Page/Veto.jsx";
import Sante from "./Pages/Page/Sante.jsx";
import Securite from "./Pages/Page/Securite.jsx";
import Education from "./Pages/Page/Education.jsx";
import Ambulance from "./Pages/Page/Ambulance.jsx";
import Contacts from "./Pages/Contacts.jsx";
import "./i18n";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return <h2>{t("common.pageNotFound")}</h2>;
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/category" element={<Category />} />

        {/* Routes dynamiques pour les catégories */}
        <Route path="/category/hospital" element={<Hospital />} />
        <Route path="/category/police" element={<Police />} />
        <Route path="/category/pompier" element={<Pompier />} />
        <Route path="/category/nurse" element={<Nurse />} />
        <Route path="/category/medical" element={<Medical />} />
        <Route path="/category/veterinaire" element={<Veterinary />} />
        <Route path="/category/sante" element={<Sante />} />
        <Route path="/category/securite" element={<Securite />} />
        <Route path="/category/education" element={<Education />} />
        <Route path="/category/ambulance" element={<Ambulance />} />

        {/* Routes anciennes maintenues pour la compatibilité */}
        <Route path="/element" element={<Element />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/police" element={<Police />} />
        <Route path="/pompier" element={<Pompier />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/veterinaire" element={<Veterinary />} />
        <Route path="/sante" element={<Sante />} />
        <Route path="/securite" element={<Securite />} />
        <Route path="/education" element={<Education />} />
        <Route path="/ambulance" element={<Ambulance />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
