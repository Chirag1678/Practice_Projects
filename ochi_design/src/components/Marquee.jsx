import React from 'react'
import {motion} from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-28 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl overflow-hidden'>
      <div className="text border-t border-b border-zinc-500 flex whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:10}} className='uppercase px-10 text-[30vw] leading-none font-grotesk font-semibold -mt-20 -mb-10'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:10}} className='uppercase px-10 text-[30vw] leading-none font-grotesk font-semibold -mt-20 -mb-10'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:10}} className='uppercase px-10 text-[30vw] leading-none font-grotesk font-semibold -mt-20 -mb-10'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
