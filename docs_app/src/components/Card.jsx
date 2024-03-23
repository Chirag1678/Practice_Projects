import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} className='relative flex-shrink-0 w-56 h-72 rounded-3xl bg-zinc-900/85 text-white px-5 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
            <div className='flex justify-between items-center pt-3 px-5 py-2 text-sm mb-2'>
                <h5>{data.filesize}</h5>
                <span>
                    {data.close? (<IoMdCloseCircle size="1.5em" color="#fff"/>):(<MdDownloadForOffline size="1.5em" color='#fff'/>)}
                </span>
            </div>
            {data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor==="blue"? "bg-blue-600":"bg-green-600"} flex justify-center cursor-pointer`}>
                <h3 className='leading-none text-xs'>{data.tag.tagTitle}</h3>
            </div>)}
        </div>
    </motion.div>
  )
}

export default Card
