import {getRequestConfig} from 'next-intl/server';
 

// It configures i18n
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'ar';
 
  return {
    locale,
    messages: (await import(`../${locale}.json`)).default
  };
});