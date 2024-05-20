import React, { useState } from 'react';
import Modal from './Modal';

function Section({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <li key={index} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden" onClick={() => openModal(item)}>
            <h3 className="font-semibold p-3">{item.name}</h3>
            <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded" />
          </li>
        ))}
      </ul>
      <Modal isOpen={isOpen} onClose={closeModal} title={selectedItem.name} description={selectedItem.desc} />
    </div>
  );
}

export default Section;
