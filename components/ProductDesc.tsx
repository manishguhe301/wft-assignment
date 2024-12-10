import Image from 'next/image';
import React from 'react';

const ProductDesc = () => {
  return (
    <div className='my-10 flex items-center gap-5 max-md:flex-col '>
      <div className='flex flex-col gap-2 w-1/2 max-md:w-full'>
        <h3 className='text-xl font-normal text-[#111928]'>
          Description produit
        </h3>
        <p className='text-sm text-[#9C9C9C] tracking-wide'>
          Festi vous propose à la location un/une &quot;Jewel – grand
          couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce
          (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire
          ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection
          rigoureuse par notre équipe. Il est en location chez nous sous la
          référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour que
          les événements de nos clients, même en last-minute, soient toujours
          une réussite. Vous pourrez trouver tout une série d&apos;autre produit
          à louer de ce type dans la catégorie &quot;Art de la Table&quot;.
        </p>
      </div>
      <div className='w-1/2 max-md:w-full bg-[#FBF9F899]'>
        <div className='py-[18px] w-full px-5 flex items-center justify-between'>
          <p className='font-medium text-[#393939] text-base text-opacity-75'>
            Livraisons
          </p>
          <Image
            src='/images/plus.svg'
            alt=''
            width={20}
            height={20}
            loading='lazy'
          />
        </div>
        <div className='py-[18px] w-full px-5 flex items-center justify-between'>
          <p className='font-medium text-[#393939] text-base text-opacity-75'>
            Questions
          </p>
          <Image
            src='/images/plus.svg'
            alt=''
            width={20}
            height={20}
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
