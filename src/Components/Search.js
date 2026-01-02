import React from 'react'
import { Search as SearchIcon } from 'lucide-react'




const Search = ({setSearchText}) => {
    return (
        <div className='flex items-center  rounded-lg shadow-md overflow-auto w-28 lg:w-64 lg:px-3 dark:bg-zinc-700/50 dark:border dark:border-zinc-600'>
            <input type="text" placeholder='search...' className='search border-none bg-transparent outline-none dark:text-white dark:placeholder-gray-400 w-20 lg:w-52' 
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button className='dark:text-gray-300'><SearchIcon className='w-6 h-6 dark:text-white' /></button>

        </div>
    )
}

export default Search