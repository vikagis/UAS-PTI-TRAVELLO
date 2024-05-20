import React from 'react';
import { wayang } from '@assets';
import AboutSumatera from '../../component/AboutSumatera';
import CagarBudaya from '../../component/CagarBudaya';

function Home() {
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('@/assets/Image/Home/Home.jpg')] bg-cover opacity-50 -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full pt-12">
          <div className="z-0 h-full w-full p-28 rounded-xl flex flex-col justify-center items-center animate-slide-in-left">
            <div className="text-center md:text-start text-black text-5xl font-bold">Welcome to Travello</div>
            <div className="text-center md:text-start text-black text-2xl">Go to explore about Sumatera!</div>
          </div>

          <div className="z-0 flex items-center justify-center">
            <img className="max-w-[400px] object-contain" src={wayang} alt="Wayang" />
          </div>
        </div>
      </div>
      <AboutSumatera />
      <CagarBudaya />
      <div className="flex justify-center items-center gap-6 pt-1 pb-14 max-w-screen-xl mx-auto lg:px-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171122.566739402!2d95.34211998809326!3d-0.14272947030330038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2aad6120570311%3A0x1def4d17e789deb4!2sPulau%20Sumatera!5e0!3m2!1sid!2sid!4v1716137278772!5m2!1sid!2sid"
          style={{ border: 0 }}
          className="w-full h-[500px]"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Embed"
        ></iframe>
      </div>
    </>
  );
}

export default Home;
