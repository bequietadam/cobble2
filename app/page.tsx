"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Transition, motion, useAnimate } from 'framer-motion';
// import { Sandpack } from '@codesandbox/sandpack-react';

import useMouse from '@hooks/useMouse';

type custom = {
  i: number,
  newX: number,
  newY: number,
}

const transition: Transition = {
  opacity: {
    repeat: Infinity,
    repeatType: 'mirror',
    duration: 1.5,
    // repeatDelay: 0.5,
  },
}

const title = 'Bienvenue';

const titleArray = new Array(5).fill(title);

export default function Page() {
  const { state, ref } = useMouse();
  const t1 = useRef<HTMLHeadingElement>(null)
  const t2 = useRef<HTMLHeadingElement>(null)
  const t3 = useRef<HTMLHeadingElement>(null)
  const t4 = useRef<HTMLHeadingElement>(null)
  const t5 = useRef<HTMLHeadingElement>(null)
  const [scope, animate] = useAnimate();
  const [stat, setStat] = useState(0);

  const refs = [
    t1,
    t2,
    t3,
    t4,
    t5,
  ]




  const rect = !!t1.current && t1.current.getBoundingClientRect()
  const vCenter = !!rect && (rect.left + rect.right) / 2;
  const hCenter = !!rect && (rect.top + rect.bottom) / 2;

  // useLayoutEffect(() => {
  //   const newX = state.elementX * -0.1;
  //   const newY = state.elementY * -0.1;
  //   if (t2.current) {
  //     t2.current.style.transform = `translate(${(newX) * 0.25}px, ${newY * 0.25}px)`
  //   }
  //   if (t3.current) {
  //     t3.current.style.transform = `translate(${(newX) * 0.50}px, ${newY * 0.50}px)`
  //   }
  //   if (t4.current) {
  //     t4.current.style.transform = `translate(${(newX) * 0.75}px, ${newY * 0.75}px)`
  //   }
  //   if (t5.current) {
  //     t5.current.style.transform = `translate(${newX}px, ${newY}px)`
  //   }
  // }, [state.elementX, state.elementY])


  useLayoutEffect(() => {

    const interval = setInterval(() => setStat(old => Number(!old)), stat ? 300 : 2200)

    return () => clearInterval(interval)

  }, [stat])


  // const choregraphy = [
  //   0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 2, 8, 0.01,
  // ]

  // console.log(choregraphy.map((e, i) => `translate(${e}px, ${e}px)`));

  // const variantsLoop = {
  //   anim: (c: custom) => ({
  //     transform: 'translate(0px, 0px)',

  //   }),
  //   loop: (c: custom) => ({
  //     transform: 'translate(8px, 8px)',
  //     transition: {
  //       transform: {
  //         duration: 1.2,
  //         repeat: Infinity,
  //         delay: (c.i / 8),
  //       }
  //     }
  //   })
  // }

  // const variants = {
  //   init: {

  //   },
  //   anim: (c: custom) => ({
  //     // opacity: 0.20 - (c.i * 5),
  //     // transform: `translate(${(c.newX) * 0.75}px, ${c.newY * 0.75}px)`,
  //     top: c.newY * (c.i * 0.25 + (c.i / 100)) + 'px',
  //     left: c.newX * (c.i * 0.25 + (c.i / 100)) + 'px',
  //     ...(stat ? variantsLoop.loop : variantsLoop.anim),
  //   }),
  // }

  return (
    <div ref={ref} className="hero m-auto h-28 w-96 flex justify-center items-center relative">
      {titleArray.map((e, i) => {
        const classNames = `absolute opacity-95`

        const c: custom = {
          i,
          newX: state.elementX * -0.1,
          newY: state.elementY * -0.1,
        }



        return (
          <motion.h1
            className={classNames}
            custom={c}
            key={e + i}
            ref={refs[i]} 
            style={{
              fontSize: `4.5rem`,
              opacity: (45 + (50 - (i + 20 * i))) / 100,
              top: 0,
              left: 0,
            }}
            transition={{
              // ...transition,
              // transform: {
              //     duration: 0.05,
              //     delay: (c.i / 1),
              //   }
              duration: 0.15,
            }}
            // animate={!!i ? 'anim' : 'init'}
            // variants={variants}
            animate={{
              // opacity: [20, 15, 10, 5, 0],
              // top: c.newY * (c.i * 0.25 + (c.i / 100)) + 'px',
              // left: c.newX * (c.i * 0.25 + (c.i / 100)) + 'px',
              top: (i && stat) ? c.newY * (c.i * 0.66 + (c.i / 100)) + 'px' : c.newY * (c.i * 0.25 + (c.i / 100)) + 'px',
              left: (i && stat) ? c.newX * (c.i * 0.66 + (c.i / 100)) + 'px' : c.newX * (c.i * 0.25 + (c.i / 100)) + 'px',
              // transform: (i && stat) ? 'translate(8px, 8px)' : 'translate(0px, 0px)'
            }}
          >{e}</motion.h1>
        )
      })}
      {/* <h1
        className="absolute opacity-95 text-7xl"
        ref={t1}
        style={{
          fontSize: '4.5rem'
          // transform: 'translate(0px, 0px)'
        }}
      >{title}</h1>
      <motion.h1
        className="absolute opacity-55 text-7xl"
        ref={t2}
        style={{
          fontSize: '4.55rem'
          // transform: 'translate(0px, 5px)'
        }}
        animate={{
          opacity: 0.1,
        }}
        transition={transition}
      >{title}</motion.h1>
      <motion.h1
        className="absolute opacity-30 text-7xl"
        ref={t3}
        style={{
          fontSize: '4.6rem'
          // transform: 'translate(0px, 12px)'
        }}
        animate={{
          opacity: 0.05,
        }}
        transition={transition}
      >{title}</motion.h1>
      <motion.h1
        className="absolute opacity-15 text-7xl"
        ref={t4}
        style={{
          fontSize: '4.65rem'
          // transform: 'translate(0px, 21px)'
        }}
        animate={{
          opacity: 0,
        }}
        transition={transition}
      >{title}</motion.h1>
      <motion.h1
        className="absolute opacity-10 text-7xl"
        ref={t5}
        style={{
          fontSize: '4.7rem'
          // transform: 'translate(0px, 30px)'
        }}
        animate={{
          opacity: 0,
        }}
        transition={transition}

      >{title}</motion.h1> */}
    </div>
  )
}
