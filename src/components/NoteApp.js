import React from 'react';
import { getInitialData } from '../utils';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }
    }

    render() {
        return (
            <>
                <NoteAppHeader />
                <NoteAppBody />
            </>
        )
    }
}

export default NoteApp;
