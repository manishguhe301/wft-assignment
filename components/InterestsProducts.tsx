import React from 'react';
import SimilarCard from './SimilarCard';

const InterestsProducts = () => {
  return (
    <div className=''>
      <div className=' flex items-center justify-between mb-7'>
        <h3 className=' text-2xl font-medium text-[#393939] font-cabinet max-sm:text-xl'>
          Ces produits pourraient vous intéresser
        </h3>
        <p className='text-[#393939] text-sm uppercase underline max-sm:text-right'>
          Voir toute la collection
        </p>
      </div>
      <div className='flex items-center gap-5 max-md:overflow-x-scroll custom-scrollbar pb-8'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex-1 max-md:flex-none max-md:w-full'>
            <SimilarCard isInterestsCard={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsProducts;
