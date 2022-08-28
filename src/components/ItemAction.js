import React from 'react';
import ArchivedButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function ItemAction({ id, onDelete, onArchive, archived }) {
    return (
        <div className='note-item__action'>
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchivedButton id={id} onArchive={onArchive} archived={archived} />
        </div>
    )
}

export default ItemAction;