import Image from 'next/image';
import React from 'react';

const NewsLetter = () => {
  return (
    <>
      <div className='py-4 flex items-center h-[300px] gap-5 max-md:flex-col max-md:h-auto '>
        <Image
          src='/images/area.svg'
          alt=''
          width={100}
          height={100}
          className='w-1/2 h-full object-cover rounded-2xl max-md:w-full'
        />
        <div className='w-1/2 h-full px-7 py-10 bg-[#FFF3F9] rounded-2xl flex flex-col justify-between gap-5 max-md:w-full'>
          <h3 className='font-medium text-3xl'>
            S&apos;inscrire & économiser{' '}
            <span className='text-[#5CD2DD] '>10% </span>
          </h3>
          <p className='text-[#BDA2B0] text-sm font-geist'>
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn&apos;t. Yet busy any
            meeting shark light marginalised 4-blocker message. Productize
            corporate nail caught synergy highlights lunch. Company another
            pushback items dear or any.
          </p>
          <div className='flex items-center gap-2 max-sm:flex-col'>
            <input
              type='text'
              className='w-full h-12 rounded-xl outline-none p-[22px] border border-[#F5E1EB] bg-white font-geist text-[#A68A98]'
              placeholder='john@doe.com'
            />
            <button className='flex items-center justify-center gap-2 bg-[#5CD2DD] text-white px-5 py-3 rounded-xl max-sm:w-full'>
              S&apos;inscrire
              <Image
                src='/images/arrow-left.svg'
                alt=''
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#39393930] mt-10 mb-4'></div>
    </>
  );
};

export default NewsLetter;
