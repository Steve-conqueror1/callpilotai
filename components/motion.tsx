"use client"

import { motion } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

/** Fades content up once as it scrolls into view. Use below the fold only. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
