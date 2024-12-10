import Image from 'next/image';
import React from 'react';

const Process = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(238, 65, 151, 0.04) 0%, rgba(255, 255, 255, 0.04) 56.61%) no-repeat',
      }}
      className=' h-[400px] flex flex-col items-center justify-center py-8 max-sm:h-full'
    >
      <div className='text-center'>
        <h3 className='text-3xl font-bold text-[#393939]'>
          On s’occupe de <span className='text-[#5CD2DD]'>tout</span>
        </h3>
        <p className='text-[#9C9C9C] font-normal text-sm py-2 max-sm:px-2'>
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>
      <div className=' py-10 flex items-center gap-5 max-sm:flex-col'>
        <div className=' flex flex-col items-center text-center gap-2'>
          <Image src='/images/bag.svg' alt='' width={50} height={50} />
          <p className='font-medium text-base text-[#393939]'>
            Livraison & Reprise
          </p>
          <p className='text-sm font-normal text-[#9C9C9C]'>
            Selon vos besoins
          </p>
        </div>
        <div className='h-[1px] w-[100px] bg-[#E5E5E5] max-sm:rotate-90 max-sm:my-10'></div>
        <div className=' flex flex-col items-center gap-2 text-center'>
          <Image src='/images/dish.svg' alt='' width={50} height={50} />
          <p className='font-medium text-base text-[#393939]'>Nettoyage</p>
          <p className='text-sm font-normal text-[#9C9C9C]'>
            Selon vos besoins
          </p>
        </div>
        <div className='h-[1px] w-[100px] bg-[#E5E5E5] max-sm:rotate-90 max-sm:my-10'></div>
        <div className=' flex flex-col items-center gap-2 text-center'>
          <Image src='/images/web-store.svg' alt='' width={50} height={50} />
          <p className='font-medium text-base text-[#393939]'>
            Commande Illimitée
          </p>
          <p className='text-sm font-normal text-[#9C9C9C]'>
            Tout est possible
          </p>
        </div>
        <div className='h-[1px] w-[100px] bg-[#E5E5E5] max-sm:rotate-90 max-sm:my-10  '></div>
        <div className=' flex flex-col items-center gap-2 text-center'>
          <Image src='/images/car.svg' alt='' width={50} height={50} />
          <p className='font-medium text-base text-[#393939]'>
            Transport & Enlèvement
          </p>
          <p className='text-sm font-normal text-[#9C9C9C]'>
            On s’occupe de tout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
