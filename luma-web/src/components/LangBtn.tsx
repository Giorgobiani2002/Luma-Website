'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { setUserLocaleAction } from '@/common/services/locale';
import type { Locale } from '../i18n/config';

type LangItem = {
  code: Locale;
  label: string;
  flag: string; // public/assets/img/... PNG/SVG
};

const LANGS: LangItem[] = [
  { code: 'en', label: 'English', flag: '/assets/img/united-kingdom.png' },
  { code: 'ka', label: 'ქართული', flag: '/assets/img/georgia.png' },
  { code: 'ru', label: 'Русский', flag: '/assets/img/russia.png' },
];

const LangBtn = () => {
  const activeLocale = useLocale() as Locale;
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Locale>(activeLocale);
  const [isPending, startTransition] = useTransition();

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCurrentLang(activeLocale);
  }, [activeLocale]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const onSelect = (lng: Locale) => {
    if (lng === currentLang) {
      setOpen(false);
      return;
    }
    startTransition(async () => {
      await setUserLocaleAction(lng, pathname);
    });
  };

  const active = LANGS.find((l) => l.code === currentLang) ?? LANGS[0];

  return (
    <div className='relative inline-block text-left'>
      <button
        ref={btnRef}
        type='button'
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className={`
          flex items-center border rounded-full px-3 py-1.5 gap-2 cursor-pointer duration-300
         
          ${isPending ? 'opacity-60' : ''}
        `}
        aria-haspopup='menu'
        aria-expanded={open}
        aria-label='Change language'
      >
        {isPending ? (
          <span className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-b-transparent' />
        ) : (
          <>
            <Image
              src={active.flag}
              width={18}
              height={18}
              alt={`${active.label} flag`}
              className='rounded-sm'
            />
            <span className='text-sm font-medium'>{active.label}</span>
            <svg
              className={`h-4 w-4 transition-transform ${
                open ? 'rotate-180' : ''
              }`}
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </>
        )}
      </button>

      {open && (
        <div
          ref={menuRef}
          role='menu'
          aria-label='Select language'
          className={`
            absolute right-0 mt-2 w-44 origin-top-right rounded-xl shadow-lg ring-1 ring-black/10 p-1 z-50
          
          `}
        >
          {LANGS.map((item) => {
            const activeItem = item.code === currentLang;
            return (
              <button
                key={item.code}
                type='button'
                onClick={() => onSelect(item.code)}
                className={`
                  w-full flex items-center gap-2 rounded-lg px-2 py-2 text-sm
                 
                `}
                role='menuitem'
              >
                <Image
                  src={item.flag}
                  width={16}
                  height={16}
                  alt={`${item.label} flag`}
                  className='rounded-sm'
                />
                <span className='flex-1'>{item.label}</span>
                {activeItem && (
                  <svg
                    className='h-4 w-4'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 5.29a1 1 0 010 1.414l-7.07 7.071a1 1 0 01-1.415 0L3.296 9.854a1 1 0 111.415-1.415l3.221 3.222 6.364-6.364a1 1 0 011.408-.006z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LangBtn;
