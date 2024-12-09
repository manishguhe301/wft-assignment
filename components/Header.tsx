import Image from 'next/image';
import React from 'react';
import Slider from './Slider';

const Header = () => {
  return (
    <div>
      <div className='py-7 px-5 flex justify-between w-full'>
        <div className='flex items-start gap-2 w-[54%] max-md:w-fit'>
          <Image src='/images/logo.webp' alt='' height={65} width={100} />
          <div className='relative w-full rounded-md max-md:hidden'>
            <input
              type='text'
              placeholder='Rechercher un produit'
              className='w-full p-3 outline-none bg-[#F9FAFB] pr-10 rounded-md text-[#667482] font-geist text-sm font-normal'
            />
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
              <Image
                src='/images/search-lg.svg'
                alt=''
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4 '>
          <div className='flex items-center gap-2 text-sm font-poppins max-sm:hidden'>
            <Image
              src='/images/lightbulb-01.svg'
              alt=''
              height={14}
              width={14}
            />
            <span className='font-medium'>Inspirations</span>
          </div>
          <div className='flex items-center gap-2 text-sm font-poppins max-sm:hidden'>
            <Image src='/images/heart.svg' alt='' height={14} width={14} />
            <span className='font-medium'>Mes favoris</span>
            <span className='px-2 py-0 bg-[#CAD2D566] text-[#242D30] rounded-[10px] text-[10px]'>
              24
            </span>
          </div>
          <button className='bg-[#0093D0] text-white flex items-center gap-1 text-sm font-poppins px-4 py-3 border border-[#007AAD] rounded-md font-medium'>
            <Image
              src='/images/shopping-cart-01.svg'
              alt=''
              height={20}
              width={20}
            />
            <span>Panier</span>
          </button>
          <div className='flex items-center gap-2 pl-2 text-sm font-montserrat'>
            <span className='h-11 w-11 rounded-full bg-[#EAEDEE]' />
            <span>FR</span>
            <Image
              src='/images/chevron-down.svg'
              alt=''
              height={14}
              width={14}
            />
          </div>
        </div>
      </div>
      <div className=''>
        <Slider />
      </div>
    </div>
  );
};

export default Header;
