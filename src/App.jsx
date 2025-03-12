import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfessionalPage from "./pages/ProfessionalPage";
import AppointmentPage from "./pages/AppointmentPage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import MyRegisterComponent from "./components/MyRegisterComponent";
import MyLogInComponent from "./components/MyLogInComponent";
import HeroPage from "./pages/HeroPage";
import HomePage from "./pages/HomePage";
import PersonalPage from "./pages/PersonalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage></HeroPage>} />
        <Route path="/login" element={<MyLogInComponent></MyLogInComponent>} />
        <Route
          path="/register"
          element={<MyRegisterComponent></MyRegisterComponent>}
        />
        <Route path="/search" element={<SearchPage></SearchPage>} />
        <Route path="/details/:id" element={<DetailsPage></DetailsPage>} />
        <Route
          path="/appointment/:id"
          element={<AppointmentPage></AppointmentPage>}
        />
        <Route
          path="/professional"
          element={<ProfessionalPage></ProfessionalPage>}
        />
        <Route path="/home" element={<HomePage></HomePage>} />
        <Route path="/personalPage" element={<PersonalPage></PersonalPage>} />
      </Routes>
    </Router>
  );
}

export default App;
