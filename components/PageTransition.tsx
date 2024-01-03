'use client'
import Navigation from '@components/Navigation';
// import ThemeDropdown from '@components/ThemeDropdown';
import FrozenRouter from '@components/FrozenRouter';
// import { MonacoTheme } from '@constants/monacoThemes';
// import defineTheme from '@lib/defineTheme';
import { ElementRef, forwardRef, useEffect, useState } from "react";
// import { ToastContainer } from 'react-toastify';
import { AnimatePresence, motion } from "framer-motion";
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";


const Child = forwardRef<
  ElementRef<typeof motion.div>,
  { children: React.ReactNode }
>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <FrozenRouter>{props.children}</FrozenRouter>
    </motion.div>
  );
});

Child.displayName = "Child";


export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
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
        <AnimatePresence mode="popLayout" initial={true}>
          <Child key={segment}>
            {children}
          </Child>
        </AnimatePresence>
  )

}
