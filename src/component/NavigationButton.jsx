import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationButton({ label, path, isDisabled }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isDisabled) {
      navigate(path);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-4 px-10 rounded-full z-50 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
      }`}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}

export default NavigationButton;
