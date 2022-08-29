import React from 'react';
import NoteItems from './NoteItems';

function NoteLists({ notes, onDelete, onArchive }) {
    return (
        notes.length > 0 ? (
            <div className='notes-list'>
                {
                    notes.map((note) => (
                        <NoteItems
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note} />
                    ))
                }
            </div>
        ) : (
            <p className='notes-list__empty-message'>Note is empty</p>
        )
    )
}

export default NoteLists;