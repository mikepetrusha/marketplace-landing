import type { Metadata } from 'next';
import './globals.css';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Test marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/nav/Storefront.svg' sizes='any' />
      </head>
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
