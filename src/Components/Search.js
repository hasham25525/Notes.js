import React from 'react'
import { MdSearch } from 'react-icons/md'




const Search = ({setSearchText}) => {
    return (
        <div className='flex items-center  rounded-lg shadow-lg overflow-auto w-28 lg:w-64 lg:px-3'>
            <input type="text" placeholder='search...' className='search border-none bg-transparent outline-none dark:text-white w-20 lg:w-52' 
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button><MdSearch className='w-6 h-6 dark:text-white' /></button>

        </div>
    )
}

export default Search