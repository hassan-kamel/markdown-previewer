import React from 'react';

const SyntaxDoc = ({ syntaxConcept }) => {
  return (
    <div className='doc'>
      <h2>{syntaxConcept.name}</h2>
      <p>{syntaxConcept.description}</p>

      {syntaxConcept.examples.map((example, idx) => {
        return (
          <div className='card' key={idx}>
            <h4>Markdown</h4>
            <div className='code-block'>
              <code>{example.markdown}</code>
            </div>
            <h4>Html</h4>
            <div className='code-block'>
              <code>{example.html}</code>
            </div>
          </div>
        );
      })}
      {syntaxConcept.additional_examples.map((example, idx) => {
        return (
          <div className='card' key={idx * 9999 + 1}>
            <h3>{example.name}</h3>
            <p>{example.description}</p>
            <h4>Markdown</h4>
            <div className='code-block'>
              <code>{example.markdown}</code>
            </div>
            <h4>Html</h4>
            <div className='code-block'>
              <code>{example.html}</code>
            </div>
          </div>
        );
      })}
      <div class='line'></div>
    </div>
  );
};

export default SyntaxDoc;
