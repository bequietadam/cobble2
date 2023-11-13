'use client'
import React, { useState, useEffect } from 'react';
import Editor, { DiffEditor as DifferenceEditor } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

type CodeEditorProps = {
  onChange?: (code: string) => void,
  lang?: string,
  theme: string,
}

const options: editor.IStandaloneEditorConstructionOptions = {
  autoIndent: 'full',
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 13,
  lineHeight: 24,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'always',
  minimap: {
    enabled: true,
  },
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
};

export default function CodeEditor({ onChange = () => null, lang, theme }: CodeEditorProps) {
  const [code, setCode] = useState('');
  const [originalCode, setOriginalCode] = useState('')
  const [file, setFile] = useState<File>();
  const [language, setLanguage] = useState<string>();
  const [showDiffEditor, setShowDiffEditor] = useState(false)

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }


  const handleEditorChange = (value: string | undefined = '') => {
    setCode(value);
    onChange(value);
  };

  useEffect(() => {
    if (file) {
      let reader = new FileReader();
      reader.onload = async (e: any) => {
        setCode(e.target.result);
        setOriginalCode(e.target.result);
      };
      reader.readAsText(file);
      let newLanguage = 'javascript';
      const extension = file.name.split('.').pop() || '';
      if (['css', 'html', 'python'].includes(extension)) {
        newLanguage = extension;
      } else if (['jsx', 'js'].includes(extension)) {
        newLanguage = 'javascript';
      } else if (['tsx', 'ts'].includes(extension)) {
        newLanguage = 'typescript';
      }
      setLanguage(newLanguage);
    }
  }, [file])

  return (
    <>
      {/* <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={() => setShowDiffEditor(s => !s)}>show diffs</button>
      </div> */}

      {showDiffEditor ?
        <DifferenceEditor
          height={'auto'}
          language={language}
          options={options}
          theme={theme}
          original={originalCode}
          modified={code}
          className="!grow"
        />
        :
        <Editor
          // height={'auto'}
          language={language}
          onChange={handleEditorChange}
          options={options}
          theme={theme}
          value={code}
          className="!grow"
        />
      }
    </>
  )
}
