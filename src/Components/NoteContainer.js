import React from 'react'
import Note from './Note'

import './noteContainer.css'

const NoteContainer = () => {
    return (

        <div className='noteContainer'>
            <h1 className="text-2xl font-semibold  h-10 mb-5">Notes</h1>
            <div className='noteContainer_notes custom-scroll p-2'>
                <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightsalmon'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'white'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
                  <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />

                <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
                <Note note={
                    {
                        text: 'hellow',
                        time: '12:30PM',
                        color: 'lightblue'

                    }
                } />
            </div>
        </div>
    )
}

export default NoteContainer
