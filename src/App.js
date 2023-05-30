import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';
import { useLocalstorage } from './hooks/useLocalstorage';
import { useGetDocs } from './hooks/useGetDocs';
import SyntaxDoc from './components/SyntaxDoc';

const App = () => {
  const [code, setCode] = useLocalstorage('## Helloo');
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [tap, setTap] = useState('CODE');
  const [docs] = useGetDocs();

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className='container'>
        <div className='btns'>
          <button
            onClick={() => {
              setTap('CODE');
            }}
            className={tap === 'CODE' ? 'btn' : ''}>
            MarkDown
          </button>
          <button
            onClick={() => {
              setTap('PERV');
            }}
            className={tap === 'PERV' ? 'btn' : ''}>
            Preview
          </button>
          <button
            onClick={() => {
              setTap('DOCS');
            }}
            className={tap === 'DOCS' ? 'btn' : ''}>
            Docs
          </button>
        </div>
        {tap === 'CODE' && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {tap === 'PERV' && (
          <div>
            <textarea readOnly value={compiled} />
          </div>
        )}
        {tap === 'DOCS' &&
          docs &&
          docs.map((doc) => {
            return <SyntaxDoc key={doc.name} syntaxConcept={doc} />;
          })}
      </div>
    </>
  );
};

export default App;
