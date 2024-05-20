import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CityPage() {
  const { city } = useParams();
  const navigate = useNavigate();

  const handleViewChange = (view) => {
    navigate(`/tour/${city}/${view}`);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-40 flex items-center justify-center flex-col min-h-[85vh]">
        <h1 className="text-3xl font-bold text-center mb-6 capitalize">{city}</h1>
        <div className="flex justify-center space-x-4">
          <button onClick={() => handleViewChange('information')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Information
          </button>
          <button onClick={() => handleViewChange('Quiz')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Quiz
          </button>
        </div>
        <div className="flex justify-center">
          <button onClick={() => navigate('/tour')} className="my-4 hover:bg-red-700 bg-red-500 text-white rounded py-2 px-4 ">
            Back to Tour List
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityPage;
