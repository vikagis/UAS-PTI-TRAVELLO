import React from 'react';
import Card from '@/component/Card';
import vikaaImage from '../../assets/Image/vikaa.jpg';
import alyaImage from '../../assets/Image/alya.jpg';
import calImage from '../../assets/Image/cal.jpg';

function AboutUs() {
  return (
      <div className="relative z-20  bg-sky-200 w-full h-full">
        <div className="flex justify-center gap-4 pt-26">
          <div className="h-auto w-[500px] pt-28 pb-26">
          <p className="mt-2 text-3xl font-semibold text-black text-bold flex justify-center mb-5">Project Leader</p>
            <Card image={vikaaImage} title="Vika Gisella" />
            <p className="mt-4 text-3xl font-semibold text-black text-bold flex justify-center pt-10">Supported by</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 pb-44">
          <div className="flex justify-center items-center pb-26">
            <Card image={alyaImage} title="Alya Virgia Aurelline" />
          </div>
          <div className="flex justify-center items-center pb-26">
            <Card image={calImage} title="Callista Jasmine Bandono" />
          </div>
        </div>
      </div>
  );
}

export default AboutUs;
