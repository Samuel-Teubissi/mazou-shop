'use client'

import { Link } from '@heroui/link'
import { Snippet } from '@heroui/snippet'
import { Code } from '@heroui/code'

import { title, subtitle } from '@/components/primitives'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import Produits from './dataMazou.json'
// import Image from 'next/image'
import { SearchInput } from '@/components/SearchInput'
import { cn, formatPrice } from '@/config/utils'
import { mz_button as buttonStyles } from '@/components/primitives'
import { Image } from '@heroui/image'
import MazouCard from '@/components/MazouCard'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { TextLoop } from '@/components/motion-primitives/text-loop'

export default function Home() {
  interface BoxProps {
    children?: React.ReactNode
    className?: string
  }
  const Box = forwardRef<HTMLDivElement, BoxProps>(({ children }, ref) => {
    return (
      <div className="box" ref={ref}>
        {children}
      </div>
    )
  })
  const MotionBox = motion(Box)
  const mzAnimateTitle = {
    start: { opacity: 0, y: -15 },
    end: { opacity: 1, y: 0 },
  }
  const mzAnimateTitleLoop = {
    initial: {
      y: 20,
      rotateX: 90,
      opacity: 0,
      filter: 'blur(4px)',
    },
    animate: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: {
      y: -20,
      rotateX: -90,
      opacity: 0,
      filter: 'blur(4px)',
    },
  }
  const mzTitleLoop = [
    'en toute simplicité',
    'juste en un clic',
    'sans prise de tête',
  ]
  return (
    <>
      <section className="flex flex-col gap-6 px-4 pb-10 md:pb-10 pt-[120px] lg:pt-[30px] items-center">
        <div className="inline-block max-w-xl text-center justify-center">
          <MotionBox
            variants={mzAnimateTitle}
            initial={'start'}
            animate={'end'}
          >
            <span className={title()}>Bienvenue sur&nbsp;</span>
            <span className="bg-gradient-to-br from-[#E44E4E] to-[#831f16] bg-clip-text text-transparent text-5xl lg:text-7xl tracking-tight inline font-black">
              Mazou&nbsp;
            </span>
          </MotionBox>
        </div>
        <div className="flex gap-3 text-center px-4 lg:max-w-4xl tracking-wide">
          <MotionBox
            variants={mzAnimateTitle}
            initial={'start'}
            animate={'end'}
          >
            Découvrez nos articles, choisissez ce qui vous plaît et commandez
            <span className="min-w-[200px] inline-block my-2">
              <span className="text-brand-primary-400 font-bold px-4 py-2 rounded-md border border-dashed border-brand-primary-500">
                <TextLoop
                  className="overflow-y-clip"
                  transition={{
                    type: 'spring',
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={mzAnimateTitleLoop}
                >
                  {mzTitleLoop.map((mzTL, i) => (
                    <span>{mzTL} !</span>
                  ))}
                </TextLoop>
              </span>
            </span>
            <br /> Une fois validé, vous serez redirigé sur WhatsApp pour
            finaliser votre livraison à domicile.
          </MotionBox>
        </div>
        <div className="mt-3 md:mt-7">
          <SearchInput />
        </div>
      </section>

      <div className="mz_container">
        <div className="mz_container-body px-3">
          <div className="mz_Heading text-2xl md:text-3xl">SPORT</div>
          <div className="w-full gap-x-1 gap-y-3 md:gap-3 items-center grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i}>
                {Produits.map((item, index) => (
                  <MazouCard Item={item} key={index} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
