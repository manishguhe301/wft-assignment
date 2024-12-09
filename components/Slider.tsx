'use client';
import React, { useState } from 'react';

const sliderItems = [
  'Art de la table',
  'Mobilier',
  'Nappage',
  'Matériel de salle',
  'Cuisine',
  'Barbecue',
  'Tente',
  'Chauffage',
  'Podium - Piste de danse',
  'Son et lumière',
  'Packs',
  'Consommables',
];

const Slider = () => {
  const [activeItem, setActiveItem] = useState('Art de la table');

  return (
    <>
      <div className='flex items-center gap-8 pb-4 max-lg:overflow-x-scroll no-scrollbar mb-0 px-5'>
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className='flex items-center'
            onClick={() => setActiveItem(item)}
          >
            <span
              className={`text-sm font-medium transition-all uppercase cursor-pointer font-inter whitespace-nowrap leading-10 ${
                item === activeItem
                  ? 'text-[#0093D0] font-bold border-b-2 border-[#0093D0] px-1'
                  : 'text-gray-500 px-0'
              }`}
              style={{ paddingBottom: item === activeItem ? '2px' : '0' }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className='h-[2px] w-full bg-[#E5E7EB] rounded mt-[-17px]'></div>
    </>
  );
};

export default Slider;
