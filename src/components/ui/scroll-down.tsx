'use client'

import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'

interface ScrollDownProps {
  delay?: number
}

const ScrollDown = ({ delay = 4 }: ScrollDownProps) => (
  <motion.div
    className="flex min-w-10 -translate-y-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1, ease: 'easeOut' }}
  >
    <a className="no-underline" href="#about-me">
      <motion.div
        className="flex items-center justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 1,
        }}
      >
        <ChevronDown className="size-15 md:size-20 lg:size-25" />
      </motion.div>
    </a>
  </motion.div>
)

export default ScrollDown
