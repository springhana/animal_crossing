import '../style/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import Header from '@/components/common/Header';
import Menu from '@/components/common/Menu';
import { ReactQueryProviders } from '@/utils/query/queryProviders';

import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '모동숲 백과사전',
  description: '모여봐요 동물의숲 백과사전입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Suspense fallback={<Loading />}>
          <ReactQueryProviders>
            <Header />
            <Menu />
            {children}
          </ReactQueryProviders>
        </Suspense>
      </body>
    </html>
  );
}
