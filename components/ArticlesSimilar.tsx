import React from 'react';
import SimilarCard from './SimilarCard';
import Image from 'next/image';

const ArticlesSimilar = () => {
  return (
    <div className='py-8'>
      <div className=' flex items-center justify-between'>
        <h3 className=' text-2xl font-medium text-[#393939] font-cabinet'>
          Articles similaires
        </h3>
        <p className='text-[#393939] text-sm uppercase underline max-sm:text-right'>
          Voir toute la collection
        </p>
      </div>
      <div className='relative py-5 flex items-center w-full  gap-5 max-md:overflow-x-scroll custom-scrollbar'>
        <div className='bg-[#5CD2DD] p-2 absolute z-10 max-md:hidden'>
          <Image
            src='/images/arrow-right.svg'
            alt='arrow'
            width={24}
            height={24}
          />
        </div>

        {Array.from({ length: 5 }).map((_, index) => (
          <SimilarCard key={index} />
        ))}

        <div className='bg-[#5CD2DD] p-2 absolute  right-0 z-10 max-md:hidden'>
          <Image
            src='/images/arrow-left.svg'
            alt='arrow'
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesSimilar;
