import React from 'react';

function ArchivedButton({ id, onArchive, archived }) {
    return <button className='note-item__archive-button' onClick={() => onArchive(id)}
    >{archived ? "Unarchive" : "Archive"} </button>
}

export default ArchivedButton;