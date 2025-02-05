import React, { useState, useRef } from 'react';
import './TextEditor.css';
import Editor from './Editor';

const Delta = Quill.import('delta');

const TextEditor = () => {
  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  return (
    <div className="editor">
      <Editor
        ref={quillRef}
        defaultValue={new Delta()
          .insert('Hello')
          .insert('\n', { header: 1 })
          .insert('Some ')
          .insert('initial', { bold: true })
          .insert(' ')
          .insert('content', { underline: true })
          .insert('\n')}
      />
    </div>
  );
};

export default TextEditor;
