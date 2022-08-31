import React from 'react';
// import Styles
import './styles/app.scss';
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
// import Pages
import Home from './pages/Home';
import MonthToMonth from './pages/MonthToMonth';
import WebsiteDesign from './pages/WebsiteDesign';
import GraphicDesign from './pages/GraphicDesign';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
// import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<Home />} />
        <Route path='/monthtomonth' exact element={<MonthToMonth />} />
        <Route path='/webdesign' exact element={<WebsiteDesign />} />
        <Route path='/graphicdesign' exact element={<GraphicDesign />} />
        <Route path='/aboutus' exact element={<AboutUs />} />
        <Route path='/contact' exact element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
