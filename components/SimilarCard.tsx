import Image from 'next/image';
import React from 'react';

const SimilarCard = ({
  isInterestsCard = false,
}: {
  isInterestsCard?: boolean;
}) => {
  return (
    <div
      className={`h-[438px] flex-shrink-0 flex flex-col group ${
        isInterestsCard ? 'w-full' : 'w-[330px]'
      }`}
    >
      <div className='flex items-center justify-center mx-auto  bg-[#FBF9F899] w-full py-16 relative'>
        <div className='flex items-center justify-between absolute top-4 px-[22px] w-full'>
          <Image src='/images/heart.svg' alt='heart' width={32} height={32} />
          <span className='px-2 py-1 text-[#111928] text-[10px] bg-[#fff]'>
            Art de la table
          </span>
        </div>
        <Image
          src='/images/tableround.svg'
          alt='similar-card'
          width={224}
          height={224}
          className='mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-105'
        />
        <div className='p-2 absolute bottom-4 bg-[#fff] left-4 right-4 flex items-center gap-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <p className='text-[10px]'>QTE</p>
          <div className='flex items-center justify-between w-full bg-[#FBF9F8] rounded-md p-3'>
            <p>-</p>
            <p className='font-bold text-base'>1</p>
            <p>+</p>
          </div>
          <button className='py-2 px-3 bg-[#ee4197] rounded-md text-white'>
            Ajouter
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2 p-2 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className='text-2xl font-playfair font-normal'>Title</p>
          <p className='font-geist text-2xl font-medium'>
            0<sup className='!text-sm'>€</sup>
          </p>
        </div>
        <div className='flex items-center justify-between w-full'>
          <p className='text-sm text-[#9C9C9C] font-geist font-normal'>
            0,35€/Pièce · RÉF : VABGN5
          </p>
          <p className='font-geist text-[#546A7D] text-[11px] px-2 py-[6px] bg-[#F1F4F6] rounded-[20px]'>
            20 pièces
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimilarCard;
