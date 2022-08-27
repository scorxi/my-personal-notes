import React from 'react';
import ItemAction from './ItemAction';

function NoteItemContents({ id, title, createdAt, body }) {
    return (
        <div className='note-item'>
            <div className='note-item__content'>
                <h3 className='note-item__title'>Judul Catatan</h3>
                <p className='note-item__date'>Sabtu, 27 Agustus 2022</p>
                <p className='note-item__body'>lorem ipsum dolor si amet consectectur, My name is Agung Darmawan</p>
            </div>
            <ItemAction />
        </div>
    )
}

export default NoteItemContents;