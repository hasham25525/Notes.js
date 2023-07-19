import React from 'react'
import './note.css'
import { Trash } from 'lucide-react';

const Note = (props) => {

  return (
    <div className='note shadow-lg hover:shadow-xl dark:border-none ' style={{ backgroundColor: props.note.color }}>
      <textarea className='note_text rounded-md custom-scroll ' id='textarea' placeholder='Your Text Here!'
        onChange={props.handleChange}
         defaultValue={props.note.text}  />
      <footer className='footer flex justify-between items-center'>
        <p>{props.note.time}</p>
        <Trash className='trash text-gray-800 w-5 h-5' onClick={() => props.delNote(props.note.id)} />
      </footer>
    </div>
  )
}

export default Note