import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react';
import './sidebar.css'

function Sidebar(props) {
  const colors = ["white", "lightsalmon", "lightblue", "lightpink", "#c0f3d9"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <div onClick={() => setListOpen(!listOpen)} className="sidebar_add">
        <PlusCircle className='w-10 h-10' />
      </div>
      <ul className={`sidebar_list pr-10 ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item) => (
          <li
            key={item.id}
            style={{ backgroundColor: item }}
            className="sidebar_list_item w-10 h-10 shadow-lg hover:shadow-xl"
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar