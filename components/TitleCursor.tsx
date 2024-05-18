"use client"
import useMouse, { MouseState } from '@hooks/useMouse';
import { motion, useAnimate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useLayoutEffect, useState } from 'react';



type TailwindFontSize =
    'xs' |
    'sm' |
    'base' |
    'lg' |
    'xl' |
    '2xl' |
    '3xl' |
    '4xl' |
    '5xl' |
    '6xl' |
    '7xl' |
    '8xl' |
    '9x;'

type TitleCursorProps = {
    animation?: 'none' | 'bump' | 'flow',
    fixCap?: number,
    fontSize?: TailwindFontSize,
    length?: number,
    title?: string,
}

// const variantsFader = {
//     loop: ({i, distance}: {i: number, distance: {x: number, y: number}}) => ({
//         opacity: [1, 1, 0.5, 0.35, 0.2, 0.1, 0],
//         x: [0, 0,
//             distance.x,
//             distance.x * 2,
//             distance.x * 3,
//             distance.x * 4,
//             distance.x * 5,
//         ],
//         y: [0, 0,
//             distance.y,
//             distance.y * 2,
//             distance.y * 3,
//             distance.y * 4,
//             distance.y * 5,
//         ],
//         transition: {
//             duration: 2,
//             delay: i * 0.4,
//             repeat: Infinity,
//             //repeatDelay: 0.01,
//             ease: 'linear',
//         }
//     })
// }

const TitleCursor = ({
    animation = 'none',
    fixCap = 1,
    fontSize = '7xl',
    length = 5,
    title = 'Hello World',
}: TitleCursorProps) => {
    const { state, ref } = useMouse();
    const [scope, animate] = useAnimate();
    const [stat, setStat] = useState(0);
    const [flow, setFlow] = useState(0);
    const titleArray = new Array(length).fill(title);


    // const distance = {
    //     x: state.elementX * -0.1,
    //     y: state.elementY * -0.1,
    // }



    useLayoutEffect(() => {
        const intervalStat = setInterval(() => {
            setStat(old => Number(!old));
        }, stat ? 800 : 2800);

        const intervalFlow = setInterval(() => {
            setFlow(old => Number(!old));
        }, flow ? (75 * length) + 150 : 2800)

        return () => {
            clearInterval(intervalStat);
            clearInterval(intervalFlow)
        }
    }, [stat, flow, length])


    return (
        <div ref={ref} className="hero m-auto h-28 w-96 flex justify-center items-center relative">
            {/* {titleArray.map((e, i) => {
                const c = {
                    newX: state.elementX * -0.1,
                    newY: state.elementY * -0.1,
                }

                //old opacity slightly exponential
                // const opacity = (50 + (45 - ((i + 11 )* i))) / 100
                //new opacity logarythhmic ( reverse exponential)
                const opacity = (100 - (Math.round(Math.log(i + 1) * 38))) / 100;


                return (
                    <motion.h1
                        className="absolute text-7xl opacity-95 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent"
                        // custom={c}
                        key={e + i}
                        style={{
                            opacity: opacity,
                            top: 0,
                            left: 0,
                        }}
                        transition={{
                            duration: 0.15,
                        }}
                        animate={{
                            top: (i && stat) ? c.newY * (i * 0.66 + (i / 100)) + 'px' : c.newY * (i * 0.25 + (i / 100)) + 'px',
                            left: (i && stat) ? c.newX * (i * 0.66 + (i / 100)) + 'px' : c.newX * (i * 0.25 + (i / 100)) + 'px',
                        }}
                    >{e}</motion.h1>
                )
            })} */}
            {titleArray.map((e, i) => {
                const c = {
                    newX: state.elementX * -0.1,
                    newY: state.elementY * -0.1,
                }

                //old opacity slightly exponential
                // const opacity = (50 + (45 - ((i + 11 )* i))) / 100
                //new opacity logarythhmic ( reverse exponential)
                const opacity = (100 - (Math.round(Math.log(i + 1) * 24))) / 100;


                return (
                    <motion.h1
                        className="absolute text-7xl opacity-95 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent"
                        key={e + i}
                        style={{
                            // opacity: opacity,
                            top: 0,
                            left: 0,
                        }}
                        transition={{
                            duration: i >= fixCap - 2 ? 0.15 + (i / 100) : 0.15,
                            opacity: {
                                delay: flow ? 0.03 * (i * (i / 6)) : 0.10 * i,
                                duration: flow ? 0.15 : 0.075
                            }
                        }}
                        animate={{
                            opacity: i >= fixCap && flow ? 0 : opacity,
                            top: (i >= fixCap && flow) ? c.newY * (i * 0.48 + (i / 100)) + 'px' : c.newY * (i * 0.28 + (i / 100)) + 'px',
                            left: (i >= fixCap && flow) ? c.newX * (i * 0.48 + (i / 100)) + 'px' : c.newX * (i * 0.28 + (i / 100)) + 'px',
                        }}
                    >{e}</motion.h1>
                )
            })}
        </div>
    )
}

export default TitleCursor