import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './global.css';
import clsx from 'clsx';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Header from '@/modules/Header';
import { ReactNode } from 'react';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

export const metadata: Metadata = {
  title: 'Russell Dias',
  description:
    'An experienced and passionate frontend engineer with a track record of consistently delivering high impact solutions that drive business growth and improve user experience at fast-paced startups.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          mulish.className,
          'flex justify-center flex-col items-center bg-gradient-to-r from-purple-100 to-blue-200 mb-10',
        )}
      >
        <Header />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
