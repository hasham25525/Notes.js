import React from 'react'
import { Moon, Sun } from 'lucide-react';
import underline from '../img/underline.png'
const Header = ({ handleThemeSwitch }) => {
    return (
        <div className='flex justify-between px-8 lg:px-10 pt-8'>
            <h1 className="text-2xl font-semibold  dark:text-white">Notes <img src={underline} className='absolute top-12 left-3 lg:left-5 w-28 '/></h1> 
            <button className='px-4 py-2 shadow-xl  rounded-2xl'
                onClick={() => {
                    handleThemeSwitch()
                }}> <Moon className='dark:hidden' />
                <Sun className='hidden dark:block text-white'/>
            </button>
        </div>
    )
}

export default Header