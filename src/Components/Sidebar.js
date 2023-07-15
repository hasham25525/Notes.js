import React, {useState} from 'react'
import { PlusCircle } from 'lucide-react';
import './sidebar.css'

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <div onClick={() => setListOpen(!listOpen)} className="sidebar_add">
        <PlusCircle />
      </div>
      <ul className={`sidebar_list pr-10 ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: item }}
            className="sidebar_list_item"
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar