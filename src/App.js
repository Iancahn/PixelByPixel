import React from 'react';
// import Styles
import './App.css';
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
// import Pages
import Home from './pages/Home';
import MonthToMonth from './pages/MonthToMonth';
import WordpressWebsites from './pages/WordpressWebsites';
import GraphicDesign from './pages/GraphicDesign';
import AboutUs from './pages/Home';
import WebApp from './pages/WebApp';
import ContactUs from './pages/ContactUs';
// import Components
import Navbar from './components/Navbar';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes location={location} key={location.pathname}>
        <Route path='/monthtomonth' exact element={<MonthToMonth />} />
        <Route path='/wordpresswebsites' exact element={<WordpressWebsites />} />
        <Route path='/graphicdesign' exact element={<GraphicDesign />} />
        <Route path='/webapp' exact element={<WebApp />} />
        <Route path='/aboutus' exact element={<AboutUs />} />
        <Route path='/contact' exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
