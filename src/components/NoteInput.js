import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <div className='note-input' >
                <h2>Buat Catatan</h2>
                <form>
                    <p className='note-input__title__char-limit'></p>
                    <input className='note-input__title' type='text' placeholder='Judul Catatan' required />
                    <input className='note-input__body' type='text' placeholder='Tuliskan catatan di sini...' required />
                    <button type='submit'>Tambah Catatan</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;