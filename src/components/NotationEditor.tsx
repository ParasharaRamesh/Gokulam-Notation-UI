import React from 'react';
import 'draft-js/dist/Draft.css';
import {Editor, EditorState} from 'draft-js';

/*
* TODO:
*  . can try using draft js and see how things look
* */

const NotationEditor = () => {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    return <Editor editorState={editorState} onChange={setEditorState} />;
};

export default NotationEditor;