import React, { useState, useEffect } from 'react';
import Card from '@components/Card';
import { padangImage, palembangImage, lampungImage } from '@assets';

import { Icon } from '@iconify/react';

import axios from 'axios';

const tourData = [
  {
    image: padangImage,
    title: 'Padang',
    route: '/tour/padang',
  },
  {
    image: palembangImage,
    title: 'Palembang',
    route: '/tour/palembang',
  },
  {
    image: lampungImage,
    title: 'Lampung',
    route: '/tour/lampung',
  },
];

function Tour() {
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState(null);

  async function fetchWeather() {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: 'Jakarta',
        appid: '2f98a70cccb48c78116007b017a9d557',
        units: 'metric',
      },
    });
    setWeather(res.data);
  }

  async function fetchCity() {
    const res = await axios.get('https://api.airtable.com/v0/appEyBwYDv6bidj1I/kota', {
      headers: {
        Authorization: 'Bearer pathVKP5PrbPn5qqG.40c6135e74d703e0a3ec92d49bcc30768cec322e31536a7358440b36a121a854'
      }
    });

    const data = await res.data.records.map((record) => ({
      id: record.id,
      name: record.fields.name,
      desc: record.fields.desc,
      img: record.fields.img[0].url,
    }));

    setCity(data);
  }

  useEffect(() => {
    fetchWeather();
    fetchCity();
  }, []);

  return (
    <div className="bg-sky-200 min-h-screen flex flex-col items-center justify-center">
      <div className="mx-20 pt-28 pb-26">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {city.map((tour, index) => (
            <Card key={index} image={tour.img} title={tour.name} route={`/tour/${tour.name.toLowerCase()}`} />
          ))}
        </div>
      </div>
      {weather && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 px-8 pb-12">
          <div className="flex items-center gap-6">
            <img className="h-24" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold">{weather.main.temp}°C</h1>
              <p className="text-xl">{weather.weather[0].main}</p>
            </div>
          </div>
          <div className="hidden md:block self-stretch border-r my-6 border-sky-600"></div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 text-lg tracking-tight">
            <div className="flex gap-3 items-center">
              <Icon icon="mdi:calendar" className="text-2xl" />
              <p>{new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })} WIB</p>
            </div>
            <div className="flex gap-3 items-center">
              <Icon icon="mdi:weather-windy" className="text-2xl" />
              <p>{weather.wind.speed} kmph</p>
            </div>
            <div className="flex gap-3 items-center">
              <Icon icon="mdi:thermometer" className="text-2xl" />
              <p>feels like {weather.main.feels_like} °C</p>
            </div>
            <div className="flex gap-3 items-center">
              <Icon icon="mdi:water" className="text-2xl" />
              <p>{weather.main.humidity}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tour;
