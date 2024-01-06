'use client'
import FrozenRouter from '@components/FrozenRouter';
import { ElementRef, forwardRef } from "react";
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


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();


  return (
        <AnimatePresence mode="popLayout" initial={true}>
          <Child key={segment}>
            {children}
          </Child>
        </AnimatePresence>
  )

}
