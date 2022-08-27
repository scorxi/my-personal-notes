import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        return (
            <div className='note-input' >
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa Karakter : </p>
                    <input className='note-input__title' type='text' value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder='Judul Catatan' required />
                    <input className='note-input__body' type='text' value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='Tuliskan catatan di sini...' required />
                    <button type='submit'>Tambah Catatan</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;