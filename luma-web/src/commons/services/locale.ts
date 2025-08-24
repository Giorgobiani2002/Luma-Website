'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { type Locale, defaultLocale } from '@/i18n/config';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale(): Promise<Locale> {
  const v = (await cookies()).get(COOKIE_NAME)?.value as Locale | undefined;
  return v ?? defaultLocale;
}

export async function setUserLocaleAction(locale: Locale, returnTo?: string) {
  (await cookies()).set(COOKIE_NAME, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
  // middleware next-intl იმუშავებს შემდეგ request-ზე
  redirect(returnTo || '/'); // გადაგიტანს იმავე ან მთავარ გვერდზე და ენა იქნება განახლებული
}
