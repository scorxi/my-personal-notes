import React from 'react';
import ArchivedButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function ItemAction({ id, onDelete }) {
    return (
        <div className='note-item__action'>
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchivedButton />
        </div>
    )
}

export default ItemAction;