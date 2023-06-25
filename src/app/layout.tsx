import './globals.css';
import {Roboto} from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import StoreProvider from '@/store/StoreProvider';

const roboto = Roboto({weight: ['400', '700'], subsets: ['cyrillic']});

export const metadata = {
  title: 'Билетопоиск',
  description: 'Покупка билетов онлайн',
};

export default function RootLayout
({
   children,
 }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={roboto.className}>
    <StoreProvider>
      <Header/>
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer/>
      <div id={'modal-layer'}/>
      <div id={'dropdown-layer'}/>
    </StoreProvider>
    </body>
    </html>
  );
}
