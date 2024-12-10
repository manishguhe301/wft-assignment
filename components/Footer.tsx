import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='py-10 flex  justify-between max-md:flex-col max-md:gap-10 max-md:items-center max-sm:items-start'>
        <div className='flex items-center gap-10 max-md:flex-col'>
          <Image src='/images/logo.webp' alt='logo' width={100} height={65} />
          <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-5'>
            <div className=' flex flex-col gap-2'>
              <h6 className='text-[#393939] font-bold text-[18px]'>
                INFOS PRATIQUES
              </h6>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                À propos
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Livraisons & Reprises
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Mode d&apos;emploi
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                F.A.Q
              </p>
            </div>
            <div className=' flex flex-col gap-2'>
              <h6 className='text-[#393939] font-bold text-[18px]'>LÉGAL</h6>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Mentions légales
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                CGU
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                CGV
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Politique de confidentialité
              </p>
            </div>
            <div className=' flex flex-col gap-2'>
              <h6 className='text-[#393939] font-bold text-[18px]'>
                MON COMPTE
              </h6>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Accéder à mon compte
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Ma liste d&apos;envie
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Créer un compte
              </p>
              <p className='font-geist font-normal text-sm text-[#393939]'>
                Mot de passe oublié
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end gap-3 max-sm:items-start'>
          <p className='font-bold text-[18px] text-[#393939]'>NOUS SUIVRE</p>
          <div className='flex items-center gap-2'>
            <div className='border-[0.5px] border-[#39393959] p-2 rounded-md'>
              <Image
                src='/images/twitter.svg'
                alt='twitter'
                width={22}
                height={22}
                className=''
              />
            </div>

            <div className='border-[0.5px] border-[#39393959] p-2 rounded-md'>
              <Image
                src='/images/instagram.svg'
                alt='twitter'
                width={22}
                height={22}
                className=''
              />
            </div>
            <div className='border-[0.5px] border-[#39393959] p-2 rounded-md'>
              <Image
                src='/images/linkedin.svg'
                alt='twitter'
                width={22}
                height={22}
                className=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='h-[50vh]'></div>
    </>
  );
};

export default Footer;
