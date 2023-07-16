import React from 'react'
import './note.css'
import { Trash } from 'lucide-react';

const Note = (props) => {
  return (
    <div className='note shadow-lg hover:shadow-xl' style={{backgroundColor:props.note.color}}>
        <textarea className='note_text' defaultValue={props.note.text}/>
        <footer className='footer flex justify-between items-center'>
        <p>{props.note.time}</p>
        <Trash className='trash text-gray-800' onClick={()=>props.delNote(props.note.id)}/>
        </footer>
    </div>
  )
}

export default Note