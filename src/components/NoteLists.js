import React from 'react';
import NoteItems from './NoteItems';

function NoteLists({ notes, onDelete }) {
    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <NoteItems
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                ))
            }
        </div>
    )
}

export default NoteLists;