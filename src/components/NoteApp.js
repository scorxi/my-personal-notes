import React from 'react';
import NoteInput from './NoteInput';
import NoteLists from './NoteLists';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            search: '',
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    componentDidMount() {
        const storedNotes = localStorage.getItem('notes');
        console.log('storedNotes', storedNotes);
        if (storedNotes) {
            console.log('IF');
            this.setState({ notes: JSON.parse(storedNotes) });
        } else {
            console.log('else');
            this.setState({ notes: [] })
        }
    }

    componentDidUpdate() {
        localStorage.setItem('notes', JSON.stringify(this.state.notes))
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
        const newNote = this.state.notes.map((note) => (
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
        const noteSearched = this.state.notes ? this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase())) : null;
        console.log('note searched', noteSearched);

        const activeNotes = noteSearched ? noteSearched?.filter((note) => {
            return note.archived === false;
        }) : null;
        const archivedNotes = noteSearched ? noteSearched?.filter((note) => {
            return note.archived === true;
        }) : null;

        return (
            <>
                <div className='note-app__header'>
                    <h1>Personal Notes</h1>
                    <NoteSearch search={this.state.search} onChange={this.onSearchEventHandler} />
                </div>

                <div className='note-app__body'>
                    <NoteInput addNotes={this.onAddNoteHandler} />
                    <h2>Active Notes</h2>
                    <NoteLists notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Archived Notes</h2>
                    <NoteLists notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </>
        )
    }
}

export default NoteApp;

