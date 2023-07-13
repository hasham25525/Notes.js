import React from 'react'
import { PlusCircle } from 'lucide-react';
import './sidebar.css'
const Sidebar = () => {
  // const color=[]
  return (
    <div className='sidebar pr-10 '>
       <PlusCircle  />
       <ul className='sidebar_list'>
        <li className='sidebar_list_item'></li>
       </ul>
    </div>
  )
}

export default Sidebar