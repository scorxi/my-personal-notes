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
        const charLimit = 50;
        this.setState(() => {
            return {
                title: event.target.value.slice(0, charLimit)
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
            <div className='note-input'>
                <h2>Create Note</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Characters limit : {50 - this.state.title.length} </p>
                    <input className='note-input__title' type='text' value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder='Note Title' required />
                    <textarea className='note-input__body' type='text' value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='Write your note here...' required />
                    <button type='submit'>Add Note</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;