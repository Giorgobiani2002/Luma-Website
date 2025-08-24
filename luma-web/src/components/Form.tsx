'use client';

import { useForm } from 'react-hook-form';
import PrivacyTerms from './PrivacyTerms';
import { useState } from 'react';
import LangTransitionH2 from '@/lib/LangTransitionH2';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import { useTranslations } from 'next-intl';

type FormValues = {
  name: string;
  lastName: string;
  age: string;
  height: string;
  mobileNumber: string;
  weight: string;
  education: string;
  photo1: FileList;
  photo2: FileList;
  photo3: FileList;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [accepted, setAccepted] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const selectedPhotos = [data.photo1, data.photo2, data.photo3].filter(
      (fileList) => fileList && fileList.length > 0
    );
    if (!accepted) {
      alert('გთხოვთ, დათანხმდეთ პირადი ინფორმაციისა და წესების მიღებას');
      return;
    }
    alert('თქვენ დათანხმდით წესებს და შეგიძლიათ გაგრძელება!');

    if (selectedPhotos.length < 2) {
      alert('გთხოვთ ატვირთოთ მინიმუმ 2 სურათი');
      return;
    }

    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('lastName', data.lastName);
    formData.append('age', String(data.age));
    formData.append('height', String(data.height));
    formData.append('mobileNumber', String(data.mobileNumber));
    formData.append('weight', String(data.weight));
    formData.append('education', data.education);

    if (data.photo1?.[0]) formData.append('photo1', data.photo1[0]);
    if (data.photo2?.[0]) formData.append('photo2', data.photo2[0]);
    if (data.photo3?.[0]) formData.append('photo3', data.photo3[0]);

    console.log('Form Data Submitted:', data);
    alert('Form submitted successfully!');
  };

  const [setPrivacy, isSetPrivacy] = useState(false);

  const t = useTranslations();

  return (
    <div>
      <div className=''>
        <LangTransitionH2
          title={'Main.contactInfo'}
          className='mt-[32px] bg-black p-2 max-w-[210px] rounded-4xl text-center cursor-pointer text-white'
        />
        <form onSubmit={handleSubmit(onSubmit)} className='mt-[20px] '>
          <div className='flex gap-1 '>
            <div className='flex flex-col flex-1'>
              <label className='font-bold'>
                <LangTranstionSpan title={'Main.firstName'} className='' />
              </label>
              <input
                type='text'
                {...register('name', { required: 'Name is required' })}
                className='border-[1px] rounded-[5px] border-black pl-1.5 h-[40px] max-w-[220px] w-full mt-[8px]'
                placeholder={t('placeholders.firstName')}
              />
              {errors.name && (
                <p className='text-red-600'>{t('errors.firstName')}</p>
              )}
            </div>

            <div className='flex flex-col flex-1'>
              <label className='font-bold'>
                {' '}
                <LangTranstionSpan title={'Main.lastName'} className='' />
              </label>
              <input
                type='text'
                {...register('lastName', { required: 'LastName is required' })}
                className='border-[1px] border-black rounded-[5px] pl-1.5 h-[40px] max-w-[220px] w-full mt-[8px]'
                placeholder={t('placeholders.lastName')}
              />
              {errors.lastName && (
                <p className='text-red-600'>{t('errors.lastName')}</p>
              )}
            </div>

            <div className='flex flex-col flex-1'>
              <label className='font-bold'>
                {' '}
                <LangTranstionSpan title={'Main.age'} className='' />
              </label>
              <input
                type='number'
                {...register('age', { required: 'Age is required' })}
                className='border-[1px] border-black rounded-[5px] pl-1.5 h-[40px] max-w-[220px] w-full mt-[8px]'
                placeholder='25'
              />
              {errors.age && <p className='text-red-600'>{t('errors.age')}</p>}
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col mt-[24px] flex-1 max-w-[170px]'>
              <label className='font-bold'>
                <LangTranstionSpan title={'Main.phone'} className='' />
              </label>
              <input
                type='number'
                {...register('mobileNumber', {
                  required: 'mobileNumber is required',
                })}
                className='border-[1px] border-black rounded-[5px] pl-1.5 mt-[8px] h-[40px] max-w-[170px] w-full '
                placeholder='568 789 456'
              />
              {errors.mobileNumber && (
                <p className='text-red-600'>{t('errors.phone')}</p>
              )}
            </div>

            <div className='flex flex-col mt-[24px] flex-1 '>
              <label className='font-bold'>
                {' '}
                <LangTranstionSpan title={'Main.education'} className='' />
              </label>
              <input
                type='text'
                {...register('education', {
                  required: 'Education is required',
                })}
                className='border-[1px] border-black rounded-[5px] pl-1.5 h-[40px] mt-[8px] max-w-[210px] w-full'
                placeholder={t('placeholders.education')}
              />
              {errors.education && (
                <p className='text-red-600'>{t('errors.education')}</p>
              )}
            </div>
          </div>

          <LangTransitionH2
            title={'Main.uploadImages'}
            className={
              'mt-[32px] bg-black p-2 max-w-[250px] rounded-4xl text-center cursor-pointer text-white'
            }
          />

          <LangTransitionH2 title={'Main.uploadMin'} className={'mt-2.5'} />

          <div className='flex gap-4 mt-[20px]'>
            <label className='w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden'>
              <span className='text-gray-400 text-3xl'>+</span>
              <input type='file' {...register('photo1')} className='hidden' />
            </label>
            <label className='w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden'>
              <span className='text-gray-400 text-3xl'>+</span>
              <input type='file' {...register('photo2')} className='hidden' />
            </label>
            <label className='w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden'>
              <span className='text-gray-400 text-3xl'>+</span>
              <input type='file' {...register('photo3')} className='hidden' />
            </label>
          </div>

          <LangTransitionH2
            title={'Main.requiredInfo'}
            className={
              'mt-[32px] bg-black p-2 max-w-[250px] rounded-4xl text-center cursor-pointer text-white'
            }
          />

          <div className='flex gap-3'>
            <div className='flex flex-col mt-[24px]'>
              <label className='font-bold'>
                <LangTranstionSpan title={'Main.weight'} className='' />
              </label>
              <input
                type='number'
                {...register('weight', { required: 'Weight is required' })}
                className='border-[1px] border-black rounded-[5px] pl-1.5 mt-[8px] h-[40px] max-w-[170px]'
                placeholder='55'
              />
              {errors.weight && (
                <p className='text-red-600'>{t('errors.weight')}</p>
              )}
            </div>
            <div className='flex flex-col mt-[24px] flex-1'>
              <label className='font-bold'>
                {' '}
                <LangTranstionSpan title={'Main.height'} className='' />
              </label>
              <input
                type='number'
                {...register('height', { required: 'height is required' })}
                className='border-[1px] border-black rounded-[5px] pl-1.5 mt-[8px] h-[40px] max-w-[170px] w-full'
                placeholder='165'
              />
              {errors.height && (
                <p className='text-red-600'>{t('errors.height')}</p>
              )}
            </div>
          </div>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className='w-4 h-4 accent-black'
            />

            <span>
              {t('Main.consent')}
              <button
                onClick={() => {
                  isSetPrivacy(true);
                }}
                className='text-black font-extrabold underline cursor-pointer ml-2'
              >
                {t('Main.Read')}
              </button>
            </span>
          </label>

          <div className='flex justify-center mt-[24px]'>
            <button
              type='submit'
              className='bg-black text-white px-6 py-2 rounded-lg font-bold cursor-pointer'
            >
              <LangTranstionSpan title={'Main.register'} className={''} />
            </button>
          </div>
        </form>
      </div>
      {setPrivacy && <PrivacyTerms onClose={() => isSetPrivacy(false)} />}
    </div>
  );
}
