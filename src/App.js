import React, { useEffect } from 'react';
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
import CaseStudies from './pages/CaseStudies';
import ContactUs from './pages/ContactUs';
// import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const scrollHandler = e => {
      if (window.scrollY > 120) {
        document.querySelector('header').classList.add("active");
        console.log('window.scrollY', window.scrollY);
      } else {
        document.querySelector('header').classList.remove("active");
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

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
        <Route path='/case-studies/:id' exact element={<CaseStudies />} />
        <Route path='/contact' exact element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
