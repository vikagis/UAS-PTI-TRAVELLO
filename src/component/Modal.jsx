import React from "react";

function Modal({ isOpen, onClose, title, description }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
