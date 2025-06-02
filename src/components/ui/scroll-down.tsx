'use client'

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
    <a className="no-underline" href="#">
      <motion.div
        className="flex items-center justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 1, // Start bouncing after entrance animation
        }}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="size-15 md:size-20 lg:size-25"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
            fill="rgba(28,28,30,1)"
          />
        </svg>
      </motion.div>
    </a>
  </motion.div>
)

export default ScrollDown
