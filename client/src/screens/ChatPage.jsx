import React from 'react';
import './ChatPage.css'; 
import { useNavigate } from 'react-router-dom';

const fruits = [
  { name: 'Apple', description: 'A sweet red fruit' },
  { name: 'Banana', description: 'A long yellow fruit' },
  { name: 'Mango', description: 'A juicy tropical fruit' },
];

function ChatPage() {
  const [selectedFruit, setSelectedFruit] = React.useState(null);
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="chat-container">
      <button className="back-button" onClick={goBack}>
        ←
      </button>
      <h2 className="chat-heading">Chat Page</h2>
      {selectedFruit ? (
        <div className="selected-fruit">
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
          <button className="go-back-button" onClick={() => setSelectedFruit(null)}>Go Back</button>
        </div>
      ) : (
        <div className="fruit-list">
          {fruits.map((fruit) => (
            <div key={fruit.name} className="fruit-item" onClick={() => setSelectedFruit(fruit)}>
              <h3>{fruit.name}</h3>
              <p>{fruit.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChatPage;
