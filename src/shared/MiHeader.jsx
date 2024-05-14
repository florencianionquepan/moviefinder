import React, {useState} from 'react'
import { FilmIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import { PublicMenu } from './PublicMenu';


export default function MiHeader() {
  let Links=[
    {id:1, name:'Home', link:'/'},
    {id:2, name:'Movies', link:'/movies'},
    {id:3, name:'Genre', link:'/genres'}
  ]

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className='shadow-md w-full relative top-0 left-0'>
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

        <PublicMenu
        isOpen={isOpen} />
      </div>
    </div>
    
  )
}
