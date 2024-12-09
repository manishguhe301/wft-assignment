import Image from 'next/image';
import React from 'react';
import ProductDesc from './ProductDesc';

const MainSection = () => {
  return (
    <>
      <div className='w-full flex gap-6 max-sm:flex-col'>
        <div className='w-1/2 max-sm:w-full bg-[#F8F6F4] py-10 px-20 rounded-md relative max-sm:px-13 max-sm:py-7'>
          <div className='absolute top-2 left-2 flex gap-2 flex-col'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className='p-2 bg-white rounded-lg'>
                <Image
                  src='/images/table.webp'
                  alt='table'
                  width={40}
                  height={40}
                  className={`w-10 h-10 ${index === 0 ? '' : 'opacity-50'} max-sm:w-6 max-sm:h-8`}
                />
              </div>
            ))}
          </div>
          <Image
            src='/images/machine.webp'
            alt='machine'
            width={600}
            height={400}
            layout='responsive'
            className='mix-blend-multiply'
          />
        </div>
        <div className='w-1/2 max-sm:w-full flex flex-col justify-between'>
          <div>
            <div className=' flex items-center justify-between gap-4'>
              <h1 className='text-3xl font-playfair text-[#111928] max-sm:text-2xl'>
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <Image
                src='/images/heart.svg'
                alt='heart'
                width={30}
                height={30}
              />
            </div>
            <div className='flex items-center gap-2 my-3'>
              <p className='font-geist text-2xl text-[#111928] max-sm:text-xl'>39,50€</p>
              <span className='text-[#9C9C9C] text-sm'>/pièce</span>
            </div>
            <div className=' h-[0.5px] w-full bg-[#9C9C9C] my-3 opacity-40'>
              {/* Line */}
            </div>
            <div className='flex items-center justify-between'>
              <div className=' flex items-center gap-4 font-geist py-2'>
                <div className='flex items-center gap-2'>
                  <Image
                    src='/images/scale.svg'
                    alt=''
                    width={24}
                    height={24}
                  />
                  <span>
                    20<sup>cm</sup>
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Image src='/images/res.svg' alt='' width={24} height={24} />
                  <span>
                    50<sup>cm</sup>
                  </span>
                </div>
              </div>
              <p className='text-xs text-[#9C9C9C] font-geist'>RÉF : VABGN5</p>
            </div>
            <div className=' h-[0.5px] w-full bg-[#9C9C9C] my-3 opacity-40'>
              {/* Line */}
            </div>
            <div className='w-[60%] font-geist text-sm  text-[#5D5D5D] max-sm:w-full'>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue{' '}
              <br />
              Réglable en hauteur <br /> Appareil à raclette professionnel{' '}
              <br /> Boîtier de chauffe horizontal réglable en hauteur
              <span>
                220V <br />
                900W
              </span>
            </div>
          </div>
          <div>
            <div className=' h-[0.5px] w-full bg-[#9C9C9C] my-3 opacity-40 self-end'>
              {/* Line */}
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-10 border-2 border-[#9C9C9C] rounded-lg py-3 px-6 border-opacity-50'>
                <span className='text-base font-medium'>-</span>
                <span className='text-base font-medium'>1</span>
                <span className='text-base font-medium'>+</span>
              </div>
              <button className='text-[#fff] text-opacity-100 bg-[#5CD2DD] py-3 border font-bold uppercase  flex items-center justify-center w-full rounded-lg'>
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductDesc />
    </>
  );
};

export default MainSection;
