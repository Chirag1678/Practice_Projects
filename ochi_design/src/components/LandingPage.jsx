import React from 'react'
import first from '../Assets/Images/content-image01.jpg';
import {motion} from 'framer-motion';
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-44 mb-32 px-12">
        {["we create","eye-opening","presentations"].map((item,index)=><div className="masker" key={index}>
            <div className="w-fit flex">
                {index===1 && (<motion.div initial={{width:0}} animate={{width:'8.5rem', marginRight:".75rem" }} transition={{ease:[.76,0,.24,1], duration:1}} className='w-[8.5rem] relative top-[0.8vw] h-[5.5vw] rounded-md overflow-hidden'><img src={first} alt='firstone'/></motion.div>)}
            <h1 className='flex items-center text-[7.5rem] h-full leading-[6.3vw] uppercase font-grotesk font-bold'>{item}</h1>
            </div>
        </div>)}
      </div>
      <div className="border-t border-zinc-600 flex justify-between items-center px-12 py-5">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
        <p className='text-md font-light tracking-tight leading-none' key={index}>{item}</p>
        )}
        <div className="start flex items-center gap-2 cursor-pointer">
            <div className={`px-4 py-[0.3rem] border rounded-full border-zinc-500 uppercase text-sm`}>Start the project</div>
            <div className={`w-8 h-8 rounded-full border border-zinc-500 flex justify-center items-center`}><MdOutlineArrowOutward size="1.2em"/></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
