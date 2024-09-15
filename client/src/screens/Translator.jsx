import React, { useState } from 'react';
import './Translator.css'; 
import { useNavigate } from 'react-router-dom';

function TranslatorPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const navigate = useNavigate(); 

  const handleTranslate = () => {
    setOutput(input.split('').join(''));
  };

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="translator-container">
      <button className="back-button" onClick={goBack}>
        ←
      </button>
      <h2 className="translator-heading">Translator Page</h2>
      <input
        className="translator-input"
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="translator-button" onClick={handleTranslate}>Translate</button>
      {input.length>0 && <p className="translator-output">Translated Text: {output}</p>}
    </div>
  );
}

export default TranslatorPage;
