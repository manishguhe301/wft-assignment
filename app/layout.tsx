import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'WeFrame Tech',
  description: 'WeFrame Tech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='canonical' />
        <link
          rel='preload'
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;600&family=Lora:wght@400;700&display=swap'
          as='style'
        />
        <link
          rel='preload'
          href='https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap'
          as='style'
        />
        <link
          rel='preload'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
          as='style'
        />
        <link
          rel='preload'
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900'
          as='style'
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
