import React, { useState } from 'react'
import fyde from '../Assets/Images/fyde.png';
import vise from '../Assets/Images/vise.jpeg';
import {motion} from 'framer-motion';
import { Power4 } from 'gsap';

function Featured() {
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false);
  return (
    <div className='w-full pt-20 font-["Neue_Montreal"]'>
      <div className='w-full px-12 border-b-2 border-zinc-800 pb-10'>
        <h1 className='text-5xl tracking-wide'>Feautred projects</h1>
      </div>
      <div className=" relative cards w-full flex gap-5 px-12 py-16">
        <div className='w-1/2'>
            <div className='flex items-center gap-3 pb-5'>
                <div className='h-2 w-2 rounded-full bg-white'></div>
                <h1>FYDE</h1>
            </div>
            <div className='w-full absolute top-1/2 -translate-y-1/2 z-[1] left-0 flex justify-center items-center overflow-hidden'>
            <h1 className={`text-8xl leading-none font-bold text-[#cdea68] `}>
              {"FYDE".split("").map((item,index)=>(
                <motion.span className='inline-block' initial={{y:"100%"}} animate={first ? {y:"0"}:{y:"100%"}} transition={{ease: Power4.easeInOut, delay:index*.1}}>{item}</motion.span>
              ))}
            </h1>
        </div>
        <motion.div onMouseEnter={()=>setfirst(true)} onMouseLeave={()=>setfirst(false)} className={`card w-full h-[70vh] overflow-hidden rounded-xl`} initial={{scale:1}} whileHover={{scale:.95}} transition={{ease:'easeInOut',duration:.5}}>
            <motion.img src={fyde} alt="img1" className='w-full h-full bg-cover' initial={{scale:1}} animate={second ? {scale:1.1}:{scale:1}} transition={{ease:'easeInOut',duration:1}}/>
        </motion.div>
        </div>
        <div className='w-1/2'>
        <div className='flex items-center gap-3 pb-5'>
                <div className='h-2 w-2 rounded-full bg-white'></div>
                <h1>VISE</h1>
            </div>
            <div className='w-full absolute top-1/2 -translate-y-1/2 z-[1] left-0 flex justify-center items-center overflow-hidden'>
            <h1 className={`text-8xl leading-none font-bold text-[#cdea68] `}>
            {"VISE".split("").map((item,index)=>(
                <motion.span className='inline-block' initial={{y:"100%"}} animate={second ? {y:"0"}:{y:"100%"}} transition={{ease: Power4.easeInOut, delay:index*.1}}>{item}</motion.span>
              ))}
            </h1>
        </div>
            <motion.div onMouseEnter={()=>setsecond(true)} onMouseLeave={()=>setsecond(false)} className={`card w-full h-[70vh] overflow-hidden border border-zinc-500 rounded-xl `} initial={{scale:1}} whileHover={{scale:.95}} transition={{ease:'easeInOut',duration:.5}}>
            <motion.img src={vise} alt='img2' className='w-full h-full bg-cover' initial={{scale:1}} animate={second ? {scale:1.1}:{scale:1}} transition={{ease:'easeInOut',duration:1}}/>
        </motion.div></div>
      </div>
    </div>
  )
}

export default Featured
