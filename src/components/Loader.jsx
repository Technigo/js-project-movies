import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const LoadingDot = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%'
}

const LoadingContainer = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around'
}

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const DotVariants = {
  initial: {
    y: '0%'
  },
  animate: {
    y: '100%'
  }
}

const DotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut'
}

export const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-40'>
      <h2 className='text-white text-2xl font-bold'>Loading</h2>
      <div className='bg-black pt-5'

      >
        <motion.div
          style={LoadingContainer}
          variants={ContainerVariants}
          initial='initial'
          animate='animate'
        >
          <motion.span
            className='bg-sky-600'
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            className='bg-cyan-500'
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            className='bg-violet-500'
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            className='bg-fuchsia-200'
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            className='bg-rose-400'
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
        </motion.div>
      </div>
    </div>
  )
}
