'use client';

import LangTransitionH2 from '@/lib/LangTransitionH2';
import LangTranstionP from '@/lib/LangTransitionP';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Footer() {
  const t = useTranslations();

  return (
    <div className='max-w-4xl mx-auto p-6 space-y-12'>
      <section>
        <LangTransitionH2
          title={'Main.aboutUs'}
          className='text-2xl font-bold mb-3'
        />

        <LangTranstionP
          title={'Main.aboutText'}
          className='text-lg leading-relaxed'
        />
      </section>

      <section>
        <LangTransitionH2
          title='Main.howItWorks'
          className='text-2xl font-bold mb-3'
        />

        <ul className='list-disc pl-6 space-y-2 text-lg'>
          <li>
            <LangTranstionSpan title='Main.stepRegister' className='' />
          </li>
          <li>
            {' '}
            <LangTranstionSpan title='Main.stepCheckup' className='' />
          </li>
          <li>
            {' '}
            <LangTranstionSpan title='Main.stepStimulation' className='' />
          </li>
          <li>
            {' '}
            <LangTranstionSpan title='Main.stepDonation' className='' />
          </li>
          <li>
            {' '}
            <LangTranstionSpan title='Main.stepCompensation' className='' />
          </li>
        </ul>
      </section>

      <section>
        <LangTransitionH2
          title='Main.whoIsItFor'
          className='text-2xl font-bold mb-3'
        />

        <LangTranstionP title='Main.whoText' className='text-lg' />
      </section>

      <section>
        <LangTransitionH2
          title='Main.safety'
          className='text-2xl font-bold mb-3'
        />

        <LangTranstionP title='Main.safetyText' className='text-lg' />
      </section>

      <section>
        <LangTransitionH2
          title='Main.contact'
          className='text-2xl font-bold mb-3'
        />

        <p className='text-lg'>{t('Main.phone')}: +995 XXX XX XX XX</p>
        <p className='text-lg'>{t('Main.email')}: clinic@example.com</p>
        <div className='flex space-x-4 mt-3'>
          <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>
            WhatsApp
          </button>
          <button className='bg-purple-500 text-white px-4 py-2 rounded-lg'>
            Viber
          </button>
        </div>
      </section>
    </div>
  );
}
