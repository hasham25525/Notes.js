import React, { useState, useEffect } from 'react'
import './note.css'
import { Trash } from 'lucide-react';

const Note = (props) => {
  const [text, setText] = useState(props.note.text);

  // Sync state with props when note changes externally
  useEffect(() => {
    setText(props.note.text);
  }, [props.note.text]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    props.updateNote(props.note.id, newText);
  };

  return (
    <div className='note shadow-lg hover:shadow-xl dark:border-none ' style={{ backgroundColor: props.note.color }}>
      <textarea 
        className='note_text rounded-md custom-scroll dark:text-gray-800' 
        id={props.note.id} 
        placeholder='Your Text Here!'
        onChange={handleTextChange}
        value={text}
      />
      <footer className='footer flex justify-between items-center'>
        <p className='dark:text-gray-700'>{props.note.time}</p>
        <Trash className='trash text-gray-800 dark:text-gray-700 hover:text-red-600 dark:hover:text-red-500 w-5 h-5 transition-colors' onClick={() => props.delNote(props.note.id)} />
      </footer>
    </div>
  )
}

export default Note