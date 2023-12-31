import React from 'react'
import Note from './Note'

import './noteContainer.css'


const NoteContainer = (props) => {

    const reverArray = (arr) => {
        const array = [];
        for (let i = arr.length - 1; i >= 0; --i) {
            array.push(arr[i]);
        }
        return array;
    };
    const notes = reverArray(props.notes);

     console.log('notes', props.notes )
    return (

        <div className='noteContainer '>

            <div className='noteContainer_notes custom-scroll p-2'>

                {notes.length > 0 ? (notes.map((item) => (
                    <Note
                        key={item.id}
                        note={item}
                        delNote={props.delNote}
                        handleChange={props.handleChange}
                        noteText={props.noteText}
                         />
                ))) : (
                    <h1 className="text-2xl font-semibold  h-10 mb-5 dark:text-white">Please Create a Note using Plus icon</h1>
                )}
            </div>
        </div>
    )
}

export default NoteContainer
