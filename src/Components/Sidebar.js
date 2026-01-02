import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react';
import './sidebar.css'

function Sidebar(props) {
  const colors = [
    "white", 
    "lightsalmon", 
    "lightblue", 
    "lightpink", 
    "#c0f3d9",
    "#ffd9b3",
    "#d4a5f5",
    "#a8e6cf",
    "#ffcccb",
    "#e0e0e0"
  ];

  const [listOpen, setListOpen] = useState(false);


  return (
    <div className="sidebar dark:text-white" >
      <div onClick={() => { setListOpen(!listOpen) }} className="sidebar_add align-center ">
        <PlusCircle className={`w-10 h-10 icon ${listOpen ? 'rotated' : ''}`} />
      </div>

      <ul className={`sidebar_list pr-5 lg:pr-10  ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: item }}
            className="sidebar_list_item w-8 h-8 shadow-lg hover:shadow-xl dark:border-none"
            onClick={() => { 
              props.addNote(item);
              setListOpen(false); // Close the color list after selection
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar