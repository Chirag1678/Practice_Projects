import React, { useState } from 'react'
import {motion} from 'framer-motion';
import couple from '../Assets/Images/Homepage_Couple.jpeg';

function About() {
  const [first, setfirst] = useState(false);
  return (
    <div data-scroll data-scroll-speed=".1" className='w-full bg-[#cdea68] rounded-tr-3xl rounded-tl-3xl text-black font-["Neue_Montreal"]'>
      <h1 className='w-3/4 text-5xl font-light py-20 leading-[3.5vw] px-12'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='border-t border-[#a1b562] py-5 px-12 flex justify-between'>
        <div className='w-1/2'>
            <h1 className='text-5xl'>Our approach:</h1>
            <button className='px-8 uppercase text-xs py-5 bg-black text-white rounded-full my-5 text-start flex items-center gap-5'>Read More
            <div className='w-2 h-2 rounded-full bg-white'></div>
            </button>
        </div>
        <motion.div className={`w-1/2 rounded-3xl overflow-hidden ${first && 'scale-95'} ease-in-out duration-700`} onMouseEnter={()=>setfirst(true)} onMouseLeave={()=>setfirst(false)}>
            <img src={couple} alt='couple'/>
        </motion.div>
      </div>
    </div>
  )
}

export default About
