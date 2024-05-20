import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ image, title, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className="relative bg-blue-500 h-80 min-w-64 cursor-pointer transition-transform transform hover:scale-105 mt-10 md:mt-0"
      onClick={handleClick}
      style={{ height: '400px' }} // Set the height of the card container
    >
      <img
        src={image}
        alt={title}
        className="w-full object-cover absolute top-0 inset-x-0"
        style={{ height: '400px' }} // Set the height of the image
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center font-bold p-2">{title}</div>
    </div>
  );
}

export default Card;
