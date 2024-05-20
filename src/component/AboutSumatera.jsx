import React from 'react';
import aboutsumatera from '../../src/assets/Image/aboutsumatera.png';

function AboutSumatera() {
  return (
    <div className="relative bg-white p-10 flex items-center">
      <div className="lg:grid grid-cols-3 max-w-4xl mx-auto">
        <div className="self-center p-8">
          <img className="object-contain" src={aboutsumatera} alt="Sumatra" />
        </div>
        <div className="p-4 col-span-2">
          <h1 className="text-4xl font-bold text-black mb-6">About Sumatera</h1>
          <p className="text-lg text-black mb-4">
            Sumatera adalah pulau terbesar keenam di dunia dan merupakan bagian dari Indonesia, terletak di barat negara tersebut dan berbatasan dengan Laut Andaman di barat laut, Selat Malaka di timur laut, serta Samudra Hindia di barat dan selatan. Dengan luas sekitar 473.481 km², Sumatera memiliki topografi yang beragam, termasuk pegunungan, dataran rendah, hutan hujan tropis, dan pantai, dengan Gunung Kerinci sebagai puncak tertingginya.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSumatera;
