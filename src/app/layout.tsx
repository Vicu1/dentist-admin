import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/system';
import { ReactNode } from 'react';

import ConfirmDialog from '@/components/ConfirmDialog';
import Providers from '@/store/provider';
import customTheme from '@/style/theme';
const poppins = Poppins({
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
      <body className={poppins.className}>
        <ThemeProvider theme={customTheme}>
          <Providers>
            <ConfirmDialog />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
