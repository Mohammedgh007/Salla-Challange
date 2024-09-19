import createNextIntlPlugin from 'next-intl/plugin';
 
const translationsPath = './src/presentation/translations/i18n/request.ts'

const withNextIntl = createNextIntlPlugin( translationsPath );
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig); 