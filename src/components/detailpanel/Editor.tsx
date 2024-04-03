// Import necessary modules
import React, { useRef, useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { Button } from '../shadcn/ui/button';

interface EditorProps {
  initialData?: OutputData; // Optional initial data in JSON format
}

// Define the Editor component
const Editor: React.FC<EditorProps> = ({ initialData }) => {
  // Create a ref to hold the EditorJS instance
  const editorRef = useRef<EditorJS | null>(null);
  const effectRan = useRef(false);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: 'editor-container',
      onReady: () => {
        editorRef.current = editor;
      },
      tools: {
        
        header: {
          class: require('@editorjs/header'),
          shortcut: 'CMD+SHIFT+H',
        },
        checklist: {
          class: require('@editorjs/checklist'),
          inlineToolbar: true,
        }
      },
      autofocus: true,
      data: initialData,
    });
  };

  const handleSave = async () => {
    if (editorRef.current) {
      const outputData: OutputData = await editorRef.current.save();
      console.log('Editor Content:', outputData);
    }
  };

  useEffect(() => {
    if (!editorRef.current && !effectRan.current) {
      initEditor();
    }

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
      effectRan.current = true;
    };
  }, []);

  return (
    <div className='flex flex-col m-5 border border-gray-300 rounded-lg p-5 bg-white'>
      <div id='editor-container' style={{ minHeight: '50px' }}></div>
      <button onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Editor;
