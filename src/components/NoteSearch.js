import React from 'react';

function NoteSearch({ search, onChange }) {
    return (
        <div className='note-search'>
            <input type='text' placeholder='Search Note' search={search} onChange={onChange} />
        </div>
    )
}

export default NoteSearch