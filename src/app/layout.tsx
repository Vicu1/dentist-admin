import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/system';
import { ReactNode } from 'react';

import Providers from '@/store/provider';
import customTheme from '@/style/theme';
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
});
export const metadata: Metadata = {
  title: 'Bravo Dent',
  description: 'Stomatologie',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang={'en'}>
      <body className={inter.className}>
        <ThemeProvider theme={customTheme}>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
