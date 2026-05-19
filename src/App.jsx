import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Compliance from './pages/Compliance';
import Projects from './pages/Projects';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import EPC from './pages/EPC';
import Approach from './pages/Approach';
import Pharmaceuticals from './pages/Pharmaceuticals';
import Biopharmaceuticals from './pages/Biopharmaceuticals';
import IndustrialAppliances from './pages/IndustrialAppliances';
import Cosmetics from './pages/Cosmetics';
import MedicalDevices from './pages/MedicalDevices';
import Contact from './pages/Contact';
import Sustainability from './pages/Sustainability';

const basename = '/';

function App() {
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/epc" element={<EPC />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/pharmaceuticals" element={<Pharmaceuticals />} />
          <Route path="/biopharmaceuticals" element={<Biopharmaceuticals />} />
          <Route path="/industrial-appliances" element={<IndustrialAppliances />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/medical-devices" element={<MedicalDevices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sustainability" element={<Sustainability />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

