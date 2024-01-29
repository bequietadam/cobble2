"use client"
import { Card, CardFooter, Chip } from '@nextui-org/react';
import React from 'react';
import SandPreview from './SandPreview';
import { CobbleServer } from './SandEditor';
import { motion } from 'framer-motion';
import Link from 'next/link';

type CobbleListProps = {
  cobbles?: CobbleServer[];
}


export default function CobbleList({ cobbles }: CobbleListProps) {

  const openCobble = (id: string) => {

  }



  const containerVariants = {
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  }




  return (
    <>
      {!!cobbles && (
        <motion.div
          variants={containerVariants}
          initial="init"
          animate="anim"
          className="grid gap-6 grid-cols-3 md:grid-cols-2"
        >
          {cobbles.map((cobble, id) => {

            const cardVariants = {
              init: {
                opacity: 0,
                y: -100,
              },
              anim: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: id / 10,
                }
              }
            }
            return (
              <motion.div
                key={id + cobble.title}
                initial="init"
                animate="anim"
                variants={cardVariants}
                className="w-full"
              >
                <Card
                  className="border-none w-full"

                  isFooterBlurred={true}
                  isPressable={true}
                  // onPress={openCobble(cobble._id)}
                  radius="lg"
                >
                  <Link
                    href={'/editor/' + cobble._id}
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
                      <h4 className="text-white/50 drop-shadow-sm hover:drop-shadow-md">{cobble.title}</h4>
                      <Chip
                        classNames={{
                          content: " text-tiny text-white/60",
                        }}
                        radius="full"
                        size="sm"
                        // startContent={ <presetIcon /> }
                        variant="flat"
                      >
                        {cobble.preset}
                      </Chip>

                    </motion.div>
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </>
  )
}
