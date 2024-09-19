import { Header } from "@/Components/containers/header/Header";
import { Footer } from "@/Components/stateless/Footer";
import localFont from "next/font/local";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import "../../app/globals.css";
import SallaAppContextWrapper from "@/context/AppContext";


/**
 * It includes the common UI features among all screen.
 */
export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // setup i18n
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={'rtl'}>

      <head>
      <link rel="icon" type="image/png" href=" https://cdn.salla.network/images/logo/logo-square.png"/>
      <link rel="apple-touch-icon-precomposed" href="https://cdn.salla.network/images/logo/logo-square.png"/>
      <meta name="msapplication-TileColor" content="#BAF3E6"/>
      <meta name="msapplication-TileImage" content="https://cdn.salla.network/images/logo/logo-square.png"/>

        <link rel="stylesheet" href="https://cdn.salla.network/fonts/pingarlt.css?v=1.0"/>
        <link rel="stylesheet" href="https://cdn.salla.network/fonts/sallaicons.css"/>
      </head>

      <SallaAppContextWrapper>
        <body className="w-full min-h-screen bg-gray-50 flex flex-col items-start justify-start">
          <NextIntlClientProvider messages={messages}>
            <Header/>

            {children}

            <Footer/>
          </NextIntlClientProvider>
        </body>
      </SallaAppContextWrapper>

    </html>
  );
}
