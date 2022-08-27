import React from 'react';

function ArchivedButton({ id, toArchived }) {
    return <button className='note-item__archive-button' onClick={() => toArchived(id)}>Arsipkan</button>
}

export default ArchivedButton;