import React from 'react'
import { Moon, Sun } from 'lucide-react';
import underline from '../img/underline.png'
import Search from './Search';

const Header = ({ handleThemeSwitch, setSearchText, notesCount }) => {
    return (
        <div className='px-8 lg:px-10 pt-8'>
         <div className='flex justify-between items-center pb-5 border-b dark:border-neutral-600'>
         <div className='flex items-center gap-3'>
            <div className='relative inline-block'>
                <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:text-white">Notes</h1>
                <img src={underline} alt='' className='absolute bottom-0 left-0 w-28' />
            </div>
            {notesCount > 0 && (
                <span className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
                    {notesCount} {notesCount === 1 ? 'note' : 'notes'}
                </span>
            )}
         </div>
           
           <div className='flex gap-x-3 items-center'>
           <Search setSearchText={setSearchText} />           
            <button className='px-2 py-2 shadow-md rounded-2xl dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors hover:scale-105 active:scale-95'
                onClick={() => {
                    handleThemeSwitch()
                }}> <Moon className='dark:hidden w-6 h-6' />
                <Sun className='hidden w-6 h-6 dark:block text-white'/>
            </button>
           </div>
         </div>
           
        </div>
    )
}

export default Header