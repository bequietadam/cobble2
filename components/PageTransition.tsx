import { motion, AnimatePresence } from 'framer-motion';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      x: '100vw',
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '-100vw',
    },
  }

  return (
    <AnimatePresence mode={'wait'}>
      <motion.div
        key={pathname}
        initial="intial"
        animate="animate"
        exit="exit"
        transition={{
          type: 'tween',
          duration: 0.5,
        }}
        variants={variants}
        className=" w-full flex flex-col grow"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
