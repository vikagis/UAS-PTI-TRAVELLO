import React from 'react';
import candi from '../../src/assets/Image/candi.jpg';

function CagarBudaya() {
  return (
    <div className="relative bg-white p-10 flex items-center">
      <div className="lg:grid grid-cols-3 max-w-4xl mx-auto">
        <div className="h-full order-last p-4">
          <img className="object-cover h-full" src={candi} alt="Candi" />
        </div>
        <div className="p-4 col-span-2">
          <h1 className="text-4xl font-bold text-black mb-6">Cagar Budaya</h1>
          <p className="text-lg text-black mb-4">
            Candi Bahal (Provinsi Sumatera Utara): Candi Hindu-Buddha yang terletak di Kabupaten Serdang Bedagai. Candi ini berasal dari abad ke-12 Masehi dan merupakan saksi sejarah perkembangan agama Hindu-Buddha di wilayah Sumatera Utara.
            Kerajaan Pagaruyung (Provinsi Sumatera Barat): Situs sejarah yang terletak di Kabupaten Tanah Datar. Pagaruyung adalah bekas ibu kota Kerajaan Minangkabau pada abad ke-16 hingga ke-19 Masehi. Situs ini memiliki Istana Pagaruyung yang merupakan ikon budaya Minangkabau.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CagarBudaya;