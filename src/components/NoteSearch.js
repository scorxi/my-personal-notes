import React from 'react';

function NoteSearch({ search, onChange }) {
    return (
        <div className='note-search'>
            <input type='text' placeholder='Cari Catatan' search={search} onChange={onChange} />
        </div>
    )
}

export default NoteSearch