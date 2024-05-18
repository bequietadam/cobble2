"use client"
import useMouse from '@hooks/useMouse';
import { motion } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';



// type TailwindFontSize =
//     'xs' |
//     'sm' |
//     'base' |
//     'lg' |
//     'xl' |
//     '2xl' |
//     '3xl' |
//     '4xl' |
//     '5xl' |
//     '6xl' |
//     '7xl' |
//     '8xl' |
//     '9x;'

type TitleCursorProps = {
    animation?: 'none' | 'bump' | 'flow',
    delayAnimation?: number;
    fixCap?: number,
    // fontSize?: TailwindFontSize,
    length?: number,
    title?: string,
}

const TitleCursor = ({
    animation = 'none',
    delayAnimation = 0,
    fixCap = 1,
    // fontSize = '7xl',
    length = 5,
    title = 'Hello World',
}: TitleCursorProps) => {
    const { state, ref } = useMouse();
    const [flow, setFlow] = useState(0);
    const titleArray = new Array(length).fill(title);



    useLayoutEffect(() => {
        const intervalFlow = setInterval(() => {
            setFlow(old => Number(!old));
        }, flow ? (50 * length) + 50 : 60 * length + (delayAnimation))

        return () => clearInterval(intervalFlow)
    }, [delayAnimation, flow, length])


    return (
        <div ref={ref} className="hero m-auto h-28 w-96 flex justify-center items-center relative">
            {titleArray.map((e, i) => {
                const c = {
                    newX: !!state.elementX ? state.elementX * -0.1 : 16,
                    newY: !!state.elementY ? state.elementY * -0.1 : 44,
                }
                const opacity = (100 - ((90/(length )) * i ))/ 100;

                return (
                    <motion.h1
                        className="absolute text-7xl opacity-95 bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent"
                        key={e + i}
                        style={{
                            // opacity: opacity,
                            top: 0,
                            left: 0,
                        }}
                        transition={{
                            duration: i >= fixCap - 2 ? 0.15 + (i / (10 * length)) : 0.15,
                            opacity: {
                                delay: 0.03 * (i * (i / (length / 2.66))),
                                duration: flow ? 0.15 : 0.088
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