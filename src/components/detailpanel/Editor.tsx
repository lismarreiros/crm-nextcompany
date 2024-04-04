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
          
        });
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
    <div className='bg-slate-100 rounded border-2 w-full px-4 flex flex-col'>
      <div id='editor-container' className='pt-2 font-light grow'></div>
      <Button className='bg-transparent text-black hover:bg-white' onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Editor;
