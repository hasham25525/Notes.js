import React, { useState, useEffect } from 'react'
import './note.css'
import { Trash, Pin, Copy, Check } from 'lucide-react';

const Note = (props) => {
  const [text, setText] = useState(props.note.text);
  const [copied, setCopied] = useState(false);

  // Sync state with props when note changes externally
  useEffect(() => {
    setText(props.note.text);
  }, [props.note.text]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    props.updateNote(props.note.id, newText);
  };

  const handleCopy = () => {
    if (text.trim()) {
      props.copyNote(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className={`note shadow-lg hover:shadow-xl dark:border-none ${props.note.pinned ? 'note-pinned' : ''}`} style={{ backgroundColor: props.note.color }}>
      <div className='note-header flex justify-between items-center mb-2'>
        <div className='flex gap-2 items-center'>
          <button 
            onClick={() => props.togglePin(props.note.id)}
            className='p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors'
            title={props.note.pinned ? 'Unpin note' : 'Pin note'}
          >
            <Pin className={`w-4 h-4 ${props.note.pinned ? 'text-yellow-600 fill-yellow-600' : 'text-gray-600 dark:text-gray-500'}`} />
          </button>
          {props.note.pinned && <span className='text-xs text-gray-600 dark:text-gray-500 font-medium'>Pinned</span>}
        </div>
        <div className='flex gap-1'>
          <button 
            onClick={handleCopy}
            className='p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors'
            title='Copy note'
          >
            {copied ? (
              <Check className='w-4 h-4 text-green-600' />
            ) : (
              <Copy className='w-4 h-4 text-gray-600 dark:text-gray-500' />
            )}
          </button>
          <button 
            onClick={() => props.delNote(props.note.id)}
            className='p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors'
            title='Delete note'
          >
            <Trash className='trash w-4 h-4 text-gray-600 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors' />
          </button>
        </div>
      </div>
      <textarea 
        className='note_text rounded-md custom-scroll dark:text-gray-800' 
        id={props.note.id} 
        placeholder='Your Text Here!'
        onChange={handleTextChange}
        value={text}
      />
      <footer className='footer flex justify-between items-center mt-2'>
        <div className='flex flex-col'>
          <p className='text-xs dark:text-gray-700 font-medium'>{props.note.date || props.note.time}</p>
          {props.note.date && <p className='text-xs dark:text-gray-600'>{props.note.time}</p>}
        </div>
        <div className='text-xs dark:text-gray-600'>
          {wordCount} {wordCount === 1 ? 'word' : 'words'} • {charCount} {charCount === 1 ? 'char' : 'chars'}
        </div>
      </footer>
    </div>
  )
}

export default Note