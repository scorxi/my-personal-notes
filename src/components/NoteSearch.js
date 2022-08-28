import React from 'react';

function NoteSearch({ onSearch }) {
    return (
        <div className='note-search'>
            <input type='text' placeholder='Cari Catatan' onSearch={onSearch} />
        </div>
    )
}

export default NoteSearch