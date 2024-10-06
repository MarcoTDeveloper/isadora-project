'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import BlurIn from '@/components/ui/blur-in'
import { cn } from '@/lib/utils'

export default function Home() {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-20">
        <BlurIn
          word="Project Isa"
          duration={2}
          className="text-4xl font-bold"
        />

        <Link href="/isadora-fy">
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, duration: 2 }}
            variants={defaultVariants}
            className={cn(
              'font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]',
            )}
          >
            <AnimatedGradientText>
              ❤ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Redirect
              </span>
              <ChevronRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </motion.h1>
        </Link>
      </div>
    </div>
  )
}
