import React from 'react';
import ItemAction from './ItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItemContents({ id, title, createdAt, body, onDelete }) {
    return (
        <div className='note-item'>
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <ItemAction id={id} onDelete={onDelete} />
        </div>
    )
}

export default NoteItemContents;