import React, {useState} from 'react'
import { FilmIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


export default function MiHeader() {
  let Links=[
    {name:'Home', link:'/'},
    {name:'Movies', link:'/movies'},
    {name:'Genre', link:'/genres'}
  ]

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex justify-between items-center py-4 md:px-10 px-7'>
        
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <FilmIcon className='w-7 h-7 text-violet-600'/>
          <span className='font-bold'>MovieFinder</span>
        </div>

        {/* Menu icon */}
        <div onClick={()=>setIsOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
          {
            isOpen? <XMarkIcon/>: <Bars3BottomRightIcon/>
          }
        </div>

        {/* linke items */}
        <ul className={`md:flex md:items-center 
        md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] 
        left-0 w-full md:w-auto md:pl-0 pl-9
        transition-all duration-500 ease-in 
        ${isOpen?'top-12':'top-[-490px]'}`}>
          {
            Links.map(link=>
            <li className='font-semibold my-7 md:my-0 md:ml-8'>
              <a href={link.link} className='hover:text-violet-400 duration-500'>
                {link.name}
              </a>

            </li>)
          }
          <button className='btn rounded bg-violet-600 font-semibold my-7 md:my-0 md:ml-8 d:static px-5 py-1'>
            Login
          </button>
        </ul>
      </div>
    </div>
    
  )
}
