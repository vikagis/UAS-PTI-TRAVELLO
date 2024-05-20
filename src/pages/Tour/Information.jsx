import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cityData } from "@assets/cityData";
import axios from "axios";
import Section from "../../component/Section"; 
import { useState, useEffect } from "react";

function Information() {
  const { city } = useParams();
  const [cityInfo, setCityInfo] = useState(); 
  const [foods, setFoods] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [traditionalClothing, setTraditionalClothing] = useState([]);
  const navigate = useNavigate();

  async function fetchCity() {
    const res = await axios.get('https://api.airtable.com/v0/appEyBwYDv6bidj1I/kota', {
      headers: {
        Authorization: 'Bearer pathVKP5PrbPn5qqG.40c6135e74d703e0a3ec92d49bcc30768cec322e31536a7358440b36a121a854'
      }
    });

    let data = await res.data.records.map((record) => ({
      id: record.id,
      name: record.fields.name,
      desc: record.fields.desc,
      img: record.fields.img[0].url,
    }));

    data = data.filter((record) => record.name.toLowerCase() === city);

    setCityInfo(data[0]);
  }

  async function fetchCityInfo() {
    const res = await axios.get('https://api.airtable.com/v0/appEyBwYDv6bidj1I/data', {
      headers: {
        Authorization: 'Bearer pathVKP5PrbPn5qqG.40c6135e74d703e0a3ec92d49bcc30768cec322e31536a7358440b36a121a854'
      }
    });
    
    let data = res.data.records.filter((record) => record.fields.cityName[0].toLowerCase() === city);
    data = data.map((record) => ({
      id: record.id,
      name: record.fields.name,
      category: record.fields.category,
      desc: record.fields.desc,
      img: record.fields.img[0].url,
    }));


    setFoods(data.filter((record) => record.category === 'foods'));
    setAttractions(data.filter((record) => record.category === 'attractions'));
    setTraditionalClothing(data.filter((record) => record.category === 'tradCloth'));
  }

  useEffect(() => {
    fetchCity();
    fetchCityInfo();
  }, []);
  if (!cityInfo) return null;
  return (
    <div className="max-w-screen-xl mx-auto p-4 pt-28 pb-26 relative">
      <div className="flex justify-start">
        <button
          onClick={() => navigate(`/tour/${city}`)}
          className="hover:text-slate-500 mt-2"
        >
          Back to Choose
        </button>
      </div>
      <h1 className="text-3xl font-bold text-center mt-4">{city.toUpperCase()} INFORMATION</h1>
      <div className="flex justify-center mt-8">
        <img
          src={cityInfo.img}
          alt={`${cityInfo.name} view`}
          className="w-96 h-auto mb-4 rounded-lg shadow-lg"
        />
      </div>
      <div className="space-y-4 text-center">
        <p className="text-gray-700">
          {cityInfo.desc}
        </p>
      </div>
      <Section title="Foods" items={foods} />
      <Section title="Attractions" items={attractions} />
      <Section title="Traditional Clothing" items={traditionalClothing} />
    </div>
  );
}

export default Information;
