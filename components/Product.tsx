import React from 'react';
import MainSection from './MainSection';

const Product = () => {
  return (
    <div>
      <div className='flex items-center gap-3 py-5'>
        <span className='font-geist font-medium text-sm text-[#393939]'>
          Home
        </span>
        <span className='h-2 w-2 rounded-full bg-[#9C9C9C] opacity-[30%]'></span>
        <span className='font-geist font-medium text-sm text-[#9C9C9C]'>
          Art de la table
        </span>
      </div>
      <MainSection />
    </div>
  );
};

export default Product;
