import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Over21Yrs from './Over21Yrs';
import { useRouter } from 'next/router'
import { useOverTwentyOne } from '../../context/useOverTwentyOne';
import LoginAdmin from '../LoginAdmin';

const Layout = ({ children }) => {
  const router = useRouter();
  const { twentyOne } = useOverTwentyOne();
  
  return (
    <div className='overflow-hidden max-w-screen'>
      <Head>
        <title>Palm Smoke & Vape Shop</title>
        <meta name="description" content="Palm Smoke & Vape Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        {children}
      <Footer />
      {!(router.pathname === "/admin") && (twentyOne ?? <Over21Yrs />)}
    </div>
  );
}

export default Layout;
