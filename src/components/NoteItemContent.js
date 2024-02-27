import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItemContent({ title, createdAt, body }) {
    return (
        <div className='note-item__content'>
            <h3 className='note-item__title'>{title ? title : null}</h3>
            <p className='note-item__date' >{showFormattedDate(createdAt ? createdAt : null)}</p>
            <p className='note-item__body'>{body ? body : null}</p>
        </div>
    )
}

export default NoteItemContent;