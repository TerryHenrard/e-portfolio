'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'

const GoInDepth = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.button
          className="learn-more relative inline-block h-auto w-40 cursor-pointer border-0 bg-transparent p-0 align-middle outline-none"
          whileHover="hover"
          initial="initial"
        >
          <motion.span
            className="circle bg-foreground/80 dark:bg-primary/80 relative m-0 block h-10 w-10 rounded-xl"
            aria-hidden="true"
            variants={{
              initial: { width: '2.5rem' },
              hover: { width: '100%' },
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.div
              className="icon arrow absolute top-0 bottom-0 left-2 my-auto flex items-center"
              variants={{
                initial: {
                  x: 0,
                },
                hover: {
                  x: '0.75rem',
                },
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <ArrowRight
                size={16}
                className="text-background dark:text-foreground"
              />
            </motion.div>
          </motion.span>
          <motion.span
            className="button-text text-foreground/80 dark:text-primary/80 absolute top-0 right-0 bottom-0 left-0 ml-[1.25rem] -translate-y-[2px] py-3 text-center text-sm leading-5 font-medium tracking-normal"
            variants={{
              initial: { color: 'var(--foreground)', opacity: 0.8 },
              hover: { color: 'var(--background)', opacity: 1 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            Go in depth
          </motion.span>
        </motion.button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nothing here yet</DrawerTitle>
          {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export default GoInDepth
