import React, { useEffect, useState } from 'react'

function Eyes() {
    const [first, setfirst] = useState(10);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
           let mouseX=e.clientX;
           let mouseY=e.clientY;
           let deltaX=mouseX-window.innerWidth/2;
           let deltaY=mouseY-window.innerHeight/2;
           var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
           setfirst(angle-180);
           console.log(first);
        });
    });
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className="relative h-full w-full bg-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-12">
                <div className='w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                    <div className='bg-zinc-800 w-[9vw] h-[9vw] rounded-full relative overflow-hidden'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${first}deg)`}} className="line w-full h-[1.5vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className='w-[1.5vw] h-[1.5vw] bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='bg-zinc-800 w-[9vw] h-[9vw] rounded-full relative overflow-hidden'>
                <div style={{transform:`translate(-50%,-50%) rotate(${first}deg)`}} className="line w-full h-[1.5vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className='w-[1.5vw] h-[1.5vw] bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
