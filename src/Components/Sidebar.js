import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react';
import './sidebar.css'

function Sidebar(props) {
  const colors = ["white", "lightsalmon", "lightblue", "lightpink", "#c0f3d9"];
 
    const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar dark:text-white" >
     
      <ul className={`sidebar_list pr-5 lg:pr-10  ${listOpen ? "sidebar_list_active" : ""}`}>
      <div onClick={() => {setListOpen(!listOpen)}} className="sidebar_add">
        <PlusCircle className='w-10 h-10 icon' />
      </div>
      
        {
        
        colors.map((item,index) => (
         
          <li
            key={index}
            style={{ backgroundColor: item }}
            className="sidebar_list_item w-8 h-10 shadow-lg hover:shadow-xl dark:border-none"
            onClick={() =>{ const text=item;
              props.addNote(item, text)}}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar