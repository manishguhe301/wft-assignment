'use client';
import React, { useRef } from 'react';
import SimilarCard from './SimilarCard';
import Image from 'next/image';

const ArticlesSimilar = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='py-8'>
      <div className=' flex items-center justify-between'>
        <h3 className=' text-2xl font-medium text-[#393939] font-cabinet max-sm:text-xl'>
          Articles similaires
        </h3>
        <p className='text-[#393939] text-sm uppercase underline max-sm:text-right'>
          Voir toute la collection
        </p>
      </div>
      <div className='relative py-5 flex items-center gap-5 max-md:overflow-x-scroll custom-scrollbar'>
        <div
          className='bg-[#5CD2DD] p-2 absolute z-10 cursor-pointer '
          onClick={() =>
            scrollContainerRef.current?.scrollBy({
              left: -300,
              behavior: 'smooth',
            })
          }
        >
          <Image
            src='/images/arrow-right.svg'
            alt='arrow'
            width={24}
            height={24}
            loading='lazy'
          />
        </div>
        <div
          className='flex items-center gap-5 overflow-x-scroll no-scrollbar '
          ref={scrollContainerRef}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SimilarCard key={index} />
          ))}
        </div>

        <div
          className='bg-[#5CD2DD] p-2 absolute  right-0 z-10 cursor-pointer '
          onClick={() =>
            scrollContainerRef.current?.scrollBy({
              left: 300,
              behavior: 'smooth',
            })
          }
        >
          <Image
            src='/images/arrow-left.svg'
            alt='arrow'
            width={24}
            height={24}
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesSimilar;
