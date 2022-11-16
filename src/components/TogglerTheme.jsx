import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import {BsSun, BsFillMoonStarsFill} from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

function TogglerTheme() {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div className='cursor-pointer'>
        <motion.button 
         whileHover={{scale: 1.1}}
         whileTap = {{scale: 0.8}}
         className= ' border-bottom-4'
         >
       
        {theme === 'dark' ? (
            <div className='flex items-center' onClick={() => setTheme(theme ==='dark' ? 'light' : 'dark')}> 
                <BsSun className='text-primary text-2xl mx-2'/> Toggle Light Mode
            </div>
        ): (<div className='flex items-center' onClick={() => setTheme(theme ==='dark' ? 'light' : 'dark')}> 
                <BsFillMoonStarsFill className='text-primary text-2xl mx-2'/> Toggle Dark Mode 
            </div>
        )}
        </motion.button>

    </div>
  )
}

export default TogglerTheme