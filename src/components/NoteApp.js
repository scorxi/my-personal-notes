import React from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteLists from './NoteLists';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <>
                <div className='note-app__header'>
                    <h1>Notes</h1>
                    <div className='note-search'>
                        <input type='text' placeholder='Cari catatan...' />
                    </div>
                </div>

                <div className='note-app__body'>
                    <NoteInput addNotes={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <p className='notes-list__empty-message' hidden>Tidak ada catatan</p>
                    <NoteLists notes={this.state.notes} onDelete={this.onDeleteHandler} />
                    <h2>Arsip</h2>
                    <p className='notes-list__empty-message' hidden>Tidak ada catatan</p>
                    <NoteLists notes={this.state.notes} onDelete={this.onDeleteHandler} />
                </div>
            </>
        )
    }
}

export default NoteApp;
