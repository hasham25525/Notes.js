import React from 'react'
import Note from './Note'

import './noteContainer.css'


const NoteContainer = (props) => {
    const notes = props.notes; // Notes are already sorted in App.js

    // Separate pinned and unpinned notes
    const pinnedNotes = notes.filter(note => note.pinned);
    const unpinnedNotes = notes.filter(note => !note.pinned);

    return (
        <div className='noteContainer'>
            <div className='noteContainer_notes custom-scroll p-2'>
                {notes.length > 0 ? (
                    <>
                        {pinnedNotes.length > 0 && (
                            <div className='w-full mb-4'>
                                <h2 className='text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 px-2'>Pinned Notes</h2>
                                <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mb-6'>
                                    {pinnedNotes.map((item) => (
                                        <Note
                                            key={item.id}
                                            note={item}
                                            delNote={props.delNote}
                                            updateNote={props.updateNote}
                                            togglePin={props.togglePin}
                                            copyNote={props.copyNote}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        {unpinnedNotes.length > 0 && (
                            <div className='w-full'>
                                {pinnedNotes.length > 0 && (
                                    <h2 className='text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 px-2'>All Notes</h2>
                                )}
                                <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
                                    {unpinnedNotes.map((item) => (
                                        <Note
                                            key={item.id}
                                            note={item}
                                            delNote={props.delNote}
                                            updateNote={props.updateNote}
                                            togglePin={props.togglePin}
                                            copyNote={props.copyNote}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className='empty-state flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4'>
                        <div className='mb-4'>
                            <svg className='w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2 dark:text-white">No notes yet</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
                            {props.searchText ? `No notes found matching "${props.searchText}"` : 'Click the plus icon to create your first note!'}
                        </p>
                        {!props.searchText && (
                            <div className='flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500'>
                                <span>💡</span>
                                <span>Choose a color and start writing</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default NoteContainer
