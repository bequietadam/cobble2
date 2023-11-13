"use client"
import { Card, CardFooter, Chip } from '@nextui-org/react';
import React from 'react';
import SandPreview from './SandPreview';
import { CobbleServer } from './SandEditor';
import { motion } from 'framer-motion';

type CobbleListProps = {
  cobbles: [CobbleServer];
}


export default function CobbleList({ cobbles }: CobbleListProps) {

  const openCobble = () => {

  }


  return (
    <>
      <div className="grid gap-6 grid-cols-3 md:grid-cols-2">
        {cobbles.map((cobble, id) => {

          const variants = {
            in: {
              opacity: 1,
            },
            out: {
              opacity: 0,
              transition: {
                delay: 0 + id
              }
            }
          }

          return (
            <motion.div
              key={id + cobble.title}
              initial="out"
              animate="in"
              variants={variants}
              className="w-full"
            >
              <Card
                className="border-none w-full"

                isFooterBlurred={true}
                isPressable={true}
                onPress={openCobble}
                radius="lg"
              >

                <SandPreview
                  cobble={cobble}
                  disabled={true}
                />

                <motion.div
                  className="flex justify-between items-start overflow-hidden py-2 px-4 absolute  left-4 bottom-4 rounded-2xl w-[calc(100%_-_2rem)] shadow-small z-10 bg-gradient-to-r from-primary-100/80 to-black/80"
                  style={{
                    height: '40px'
                  }}
                  whileHover={{
                    height: '270px',
                    transition: { type: 'tween', duration: 0.25, }
                  }}
                  layout
                >
                  {/* <div
                    className="flex w-full  px-2 justify-between items-center"
                  > */}
                    <h4 className="text-white/50 drop-shadow-sm hover:drop-shadow-md">{cobble.title}</h4>
                    <Chip
                      classNames={{
                        // base: "bg-gradient-to-r from-indigo-900/30 to-pink-900/30 border-small border-white/10",
                        content: " text-tiny text-white/60",
                      }}
                      // color="warning"
                      radius="full"
                      size="sm"
                      // startContent={ <presetIcon /> }
                      variant="flat"
                    >
                      {cobble.preset}
                    </Chip>
                  {/* </div> */}

                </motion.div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
