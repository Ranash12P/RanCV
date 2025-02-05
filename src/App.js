import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import GeneralInfoPage from './pages/GeneralInfoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Import the Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/general" element={<GeneralInfoPage />} />
        </Routes>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default App;
