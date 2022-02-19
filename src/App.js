import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import AboutUs from './components/AboutUs/AboutUs'
import OurTeam from './components/OurTeam/OurTeam'
import Appointments from './components/Appointments/Appointments'

function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<AboutUs />}/>
          <Route path="/team" element={<OurTeam />}/>
          <Route path="/appointments" element={<Appointments />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
