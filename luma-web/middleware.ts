import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ka', 'en', 'ru'], // მხოლოდ ეს locale-ები
  defaultLocale: 'ka',
});
