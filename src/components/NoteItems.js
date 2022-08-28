import React from 'react';
import ItemAction from './ItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItems({ id, title, createdAt, body, archived, onArchive, onDelete }) {
    return (
        <div className='note-item'>
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <ItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
        </div>
    )
}

export default NoteItems;