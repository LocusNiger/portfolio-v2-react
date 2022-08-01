import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Work from "./components/Work";
import AboutMeAndSkills from "./components/AboutMeAndSkills";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Work />} />
        <Route path="/aboutMe-skills" element={<AboutMeAndSkills />} />
        <Route path="/contact" element={<GetInTouch />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
