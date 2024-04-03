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
        // títulos sem poder editar
        const headerElements = document.querySelectorAll('.ce-header');
        headerElements.forEach(element => {
          element.setAttribute('contenteditable', 'false');
        }
        );
      },
      tools: {
        
        header: {
          class: require('@editorjs/header'),
          shortcut: 'CMD+SHIFT+H',
          inlineToolbar: false,
        },
        checklist: {
          class: require('@editorjs/checklist'),
          // inlineToolbar: true,
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
    <div className='flex flex-col p-4 bg-white'>
      <div id='editor-container' className='h-[230px]'>
        
      </div>
      <Button onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Editor;
