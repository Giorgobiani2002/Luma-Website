import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import LangTransitionH2 from '@/lib/LangTransitionH2';
import LocaleSwitcher from './LocaleSwitcher';
import LangTransitionH1 from '@/lib/LangTransitionH1';
import LangTransitionP from '@/lib/LangTransitionP';

export default function Header() {
  return (
    <div className='flex justify-center flex-col'>
      <nav className='flex justify-between items-center'>
        <Image src='/luma.png' width={70} height={64} alt='LogoLuma'></Image>
        {/* <h2>ხშირად დასმული კითხვები</h2> */}
        <LangTransitionH2 title={'Main.FAQ'} className='' />
        {/* <Image src="file.svg" width={40} height={64} alt="LogoLuma"></Image> */}
        {/* <h2>GEO</h2> */}
        <LocaleSwitcher />
      </nav>

      <LangTransitionH1
        title={'Main.donorForm'}
        className={'text-[32px] font-bold text-center mt-[24px]'}
      />

      <div className='text-center border-[1px] rounded-4xl pl-8 pr-8 pt-2 pb-2 text-[15px] mt-[24px] m-auto bg-gray-200 font-bold'>
        <LangTransitionP title='Main.confidential' className='' />
      </div>
      <div className='w-full bg-black h-[1px] mt-[24px]' />
    </div>
  );
}
