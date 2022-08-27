import React from 'react';
import ArchivedButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function ItemAction({ }) {
    return (
        <div className='note-item__action'>
            <DeleteButton />
            <ArchivedButton />
        </div>
    )
}

export default ItemAction;