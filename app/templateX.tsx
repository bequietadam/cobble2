'use client'
import Navigation from '@components/Navigation';
// import ThemeDropdown from '@components/ThemeDropdown';
// import { MonacoTheme } from '@constants/monacoThemes';
// import defineTheme from '@lib/defineTheme';
// import React, { useState } from 'react';
// import { ToastContainer } from 'react-toastify';

import PageTransition from '@components/PageTransition';



export default function Template({ children }: { children: React.ReactNode }) {
  // const [theme, setTheme] = useState<MonacoTheme>('vs-dark');



  // const handleThemeChange = (newValue: unknown) => {
  //   const selectedTheme = newValue as MonacoTheme
  //   console.log(newValue, ['light', 'vs-dark'].includes(selectedTheme));
  //   // if (['light', 'vs-dark'].includes(selectedTheme)) {
  //   // setTheme(selectedTheme);
  //   // } else {
  //   defineTheme(selectedTheme).then(() => setTheme(selectedTheme));
  //   // }

  // };


  return (
    <div className="w-full flex flex-col">
      {/* <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      SHHHBOING
      <Navigation />
      <div className="p-4 grow flex flex-col">
        <PageTransition>
          {children}
        </PageTransition>
      </div>
    </div>
  )

}
