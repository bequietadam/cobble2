"use client"
import { Button, Card, CardFooter, Chip } from '@nextui-org/react';
import React from 'react';
import SandPreview from './SandPreview';
import { CobbleServer } from './SandEditor';
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
    try {
      // let response = await fetch('/api/deleteCobble?id=' + id, {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json",
      //   },
      // });
      // response = await response.json();

      // console.log(response);

      let response: unknown = await deleteCobble(id)

      response = JSON.parse(JSON.stringify(response))

      console.log(response);

      return response;
    } catch (error) {
      console.error(error);
    }
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
                  className="border-none w-full cursor-default"

                  isFooterBlurred={true}
                  radius="lg"
                >

                  <SandPreview
                    cobble={cobble}
                    disabled={true}
                  />

                  <motion.div
                    className="flex flex-col justify-between items-start overflow-hidden py-2 px-4 absolute  left-4 bottom-4 rounded-2xl w-[calc(100%_-_2rem)] shadow-small z-10 bg-gradient-to-r from-primary-100/80 to-black/80"
                    style={{
                      height: '40px'
                    }}
                    whileHover={{
                      height: '270px',
                      transition: { type: 'tween', duration: 0.25, }
                    }}
                    layout
                  >
                    <div className='flex justify-between items-start pb-3'>
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
                      <h4 className="text-white/50 drop-shadow-sm hover:drop-shadow-md ml-1">{cobble.title}</h4>
                    </div>


                    {!!isLoaded && !!user &&
                      <Button
                        className="px-4 w-full mt-auto"
                        color="danger"
                        onClick={() => onClickDeleteCobble(cobble._id)}
                        radius="full"
                        variant="ghost"
                        size="sm"
                      >delete</Button>}
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

                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </>
  )
}
