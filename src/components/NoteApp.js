import React from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteLists from './NoteLists';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        const currentDate = new Date().toISOString();
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: currentDate,
                        archived: false,
                    }
                ]
            }
        });
    }

    onArchiveHandler(id) {
        const newNote = this.props.notes.map((note) => (
            note.id === id ? { ...note, archived: !note.archived } : note
        ))
        this.setState({ notes: newNote });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onSearchEventHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value
            }
        })
    }

    render() {
        const noteSearched = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));

        const activeNotes = noteSearched.filter((note) => {
            return note.archived === false;
        });
        const archivedNotes = noteSearched.filter((note) => {
            return note.archived === true;
        })

        return (
            <>
                <div className='note-app__header'>
                    <h1>Notes</h1>
                    <NoteSearch search={this.state.search} onChange={this.onSearchEventHandler} />
                </div>

                <div className='note-app__body'>
                    <NoteInput addNotes={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <p className='notes-list__empty-message' hidden>Tidak ada catatan</p>
                    <NoteLists notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Arsip</h2>
                    <p className='notes-list__empty-message' hidden>Tidak ada catatan</p>
                    <NoteLists notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </>
        )
    }
}

export default NoteApp;
