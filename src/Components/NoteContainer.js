import React from 'react'
import Note from './Note'

import './noteContainer.css'

const NoteContainer = (props) => {
    return (

        <div className='noteContainer'>
            <h1 className="text-2xl font-semibold  h-10 mb-5">Notes</h1>
            <div className='noteContainer_notes custom-scroll p-2'>
        
                {props.notes.map((item, index) => (
                    <Note key={index} note={item} />
                ))}
            </div>
        </div>
    )
}

export default NoteContainer
