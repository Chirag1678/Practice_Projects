import React from 'react'
import logo1 from '../Assets/Images/logo001.svg';
import logo2 from '../Assets/Images/logo002.svg';
import logo3 from '../Assets/Images/logo003.png';

function Cards() {
  return (
    <div className='w-full h-screen py-20 px-12 font-neue'>
      <div className='w-full flex items-center justify-between gap-5'>
        <div className='relative bg-[#004D43] w-1/2 rounded-xl h-[50vh] flex items-center justify-center'>
            <img src={logo1} alt="logo001" className='w-36'/>
                <div className='border border-[#CDEA67] flex items-center justify-center px-2 py-1 rounded-full text-[#CDEA67] text-sm absolute left-5 bottom-3'>&copy;2019-2022</div>
        </div>
        <a href="../App.js" className='w-1/4 bg-[#212121] rounded-xl h-[50vh] flex items-center justify-center relative'>
            <img src={logo2} alt="logo2" className='w-36'/>
            <button className='uppercase border border-white rounded-full text-sm px-2 py-1 absolute left-5 bottom-3'>rating 5.0 on clutch</button>
        </a>
        <a href="../App.js" className='w-1/4 bg-[#212121] rounded-xl h-[50vh] flex items-center justify-center relative'>
            <img src={logo3} alt="logo3" className='w-28'/>
            <button className='uppercase border border-white rounded-full text-sm px-2 py-1 absolute left-5 bottom-3'>business bootcamp alumni</button>
        </a>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Cards
