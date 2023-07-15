import React from 'react'
import Note from './Note'

import './noteContainer.css'

const NoteContainer = (props) => {

    const revArray = (arr) => {
        const array = []
        for (let i = arr.lenght - 1; i >= 0; --i) {
            array.push(arr[i]);

        }
        return array;
    };

    const notess= revArray(props.notes);
        return (

        <div className='noteContainer'>
            <h1 className="text-2xl font-semibold  h-10 mb-5">Notes</h1>
            <div className='noteContainer_notes custom-scroll p-2'>

                {props.notes.map((item) => (
                    <Note key={item.id} note={item} />
                ))}
            </div>
        </div>
    )
}

export default NoteContainer
