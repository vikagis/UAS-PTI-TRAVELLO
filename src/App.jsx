import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '@/component/Navbar';
import Home from '@/pages/Home/Home';
import Tour from '@/pages/Tour/Tour';
import CityPage from '@/pages/Tour/CityPage';
import AboutUs from '@/pages/AboutUs/AboutUs';
import Information from '@/pages/Tour/Information';
import NavigationButton from '@/component/NavigationButton';
import Quiz from '@/pages/Tour/Quiz';
import Footer from '@/component/Footer';

function App() {
  const location = useLocation();

  const getNavigation = () => {
    const path = location.pathname;
    if (/^\/(home)?$/.test(path)) {
      return {
        back: { isDisabled: true },
        next: { isDisabled: false, path: '/tour' },
      };
    } else if (/^\/tour$/.test(path)) {
      return {
        back: { isDisabled: false, path: '/home' },
        next: { isDisabled: false, path: '/about-us' },
      };
    } else if (/^\/about-us$/.test(path)) {
      return {
        back: { isDisabled: false, path: '/tour' },
        next: { isDisabled: true },
      };
    } else {
      return { back: { isDisabled: true }, next: { isDisabled: true } };
    }
  };

  const { back, next } = getNavigation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour/:city" element={<CityPage />} />
        <Route path="/tour/:city/quiz" element={<Quiz />} />
        <Route path="/tour/:city/information" element={<Information />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
      {/* <div className="fixed bottom-0 right-0 flex p-4 space-x-4">
        {!back.isDisabled && <NavigationButton label="Back" {...back} />}
        {!next.isDisabled && <NavigationButton label="Next" {...next} />}
      </div> */}
    </>
  );
}

export default App;
