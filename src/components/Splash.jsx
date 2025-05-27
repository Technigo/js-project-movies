import { motion } from 'framer-motion' 
import { useEffect } from 'react'
import Logo from './Logo'

export default function Splash({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 2000) 
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.8, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="flex items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { rotate: 0, x: -50, opacity: 0 },
          visible: {
            rotate: 360,
            x: 0,
            opacity: 1,
            transition: { duration: 1.8, ease: 'easeInOut' },
          },
        }}
      >
        <Logo className="w-16 h-16" />
        <motion.span
          className="font-condor font-extrabold italic text-[#F5DEB3] text-3xl ml-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          CINEBASE
        </motion.span>
      </motion.div>
    </motion.div>
  )
}