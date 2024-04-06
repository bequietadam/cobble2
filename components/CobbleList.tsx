"use client"
import { Button, Card, CardFooter, Chip } from '@nextui-org/react';
import React from 'react';
import SandPreview from './SandPreview';
import { CobbleServer } from './SandEditorLoaded';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import deleteCobble from '@lib/deleteCobble';

type CobbleListProps = {
  cobbles?: CobbleServer[];
}


export default function CobbleList({ cobbles }: CobbleListProps) {
  const { user, isLoaded } = useUser();

  const onClickDeleteCobble = async (id: string) => {
    await deleteCobble(id)
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
          className="mb-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
                  className="border-3 border-white/90 w-full cursor-default"

                  isFooterBlurred={true}
                  radius="lg"
                >

                  <motion.div
                    // className="flex flex-col justify-between items-start overflow-hidden py-2 px-4 absolute  left-4 bottom-4 rounded-2xl w-[calc(100%_-_2rem)] shadow-small z-10 bg-gradient-to-r from-primary-100/90 to-black/90 backdrop-blur-sm"
                    className="flex flex-col justify-between items-start rounded-t-2xl py-2 px-4 w-full shadow-medium absolute bottom-0 z-10 bg-gradient-to-r from-primary-100 to-black backdrop-blur-sm"
                    // style={{
                    //   height: '40px'
                    // }}
                    // whileHover={{
                    //   height: '270px',
                    //   // transition: { type: 'tween', duration: 0.25, }
                    // }}
                    layout
                  >


                    {(!!isLoaded && !!user) ?

                      <>
                        <div className='flex w-full justify-between items-start pb-3'>
                          <h4 className="text-white/50 drop-shadow-sm mr-1">{cobble.title}</h4>
                          <Chip
                            classNames={{
                              content: " text-tiny text-white/60",
                            }}
                            radius="full"
                            size="sm"
                            variant="flat"
                          >
                            {cobble.preset}
                          </Chip>
                        </div>
                        <Button
                          className="px-4 w-full mt-auto"
                          color="danger"
                          onClick={() => onClickDeleteCobble(cobble._id)}
                          radius="full"
                          variant="ghost"
                          size="sm"
                        >delete</Button>
                        <Link
                          className="w-full mt-3"
                          href={'/editor/' + cobble._id}
                        >
                          <Button
                            className="px-4 w-full"
                            color="primary"
                            radius="full"
                            variant="ghost"
                            size="sm"
                          >open</Button>
                        </Link>
                      </> :

                      <Link href={'/editor/' + cobble._id} className='flex w-full justify-between items-start'>
                        <h4 className="text-white/50 drop-shadow-sm mr-1">{cobble.title}</h4>
                        <Chip
                          classNames={{
                            content: " text-tiny text-white/60",
                          }}
                          radius="full"
                          size="sm"
                          variant="flat"
                        >
                          {cobble.preset}
                        </Chip>
                      </Link>
                    }
                  </motion.div>


                  <SandPreview
                    cobble={cobble}
                    disabled={true}
                  />

                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </>
  )
}
