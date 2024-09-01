import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
      <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
      toastOptions={{
        // Define default options
        className: '',
        duration: 1000,
        
        // Default options for specific types
        // success: {
        //   duration: 3000,
          
        // },
      }}
   />
 </>
  );
};

export default MainLayout;
