import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Faq.css'; 
import { useNavigate } from 'react-router-dom';

// Get the API base URL from environment variables
const baseURL = process.env.REACT_APP_API_BASE_URL;

function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editingFaq, setEditingFaq] = useState(null);
  const navigate = useNavigate(); 

  // Fetch all FAQs from FastAPI
  useEffect(() => {
    axios.get(`${baseURL}/faqs`)
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        console.error('Error fetching FAQs:', error);
      });
  }, []);

  // Handle creating a new FAQ
  const createFaq = () => {
    axios.post(`${baseURL}/faqs`, {
      id: faqs.length + 1,
      question: newFaq.question,
      answer: newFaq.answer
    }).then(response => {
      setFaqs([...faqs, response.data]);
      setNewFaq({ question: '', answer: '' });
    }).catch(error => {
      console.error('Error creating FAQ:', error);
    });
  };

  // Handle deleting an FAQ
  const deleteFaq = (faqId) => {
    axios.delete(`${baseURL}/faqs/${faqId}`)
      .then(() => {
        setFaqs(faqs.filter(faq => faq.id !== faqId));
      })
      .catch(error => {
        console.error('Error deleting FAQ:', error);
      });
  };

  // Handle updating an FAQ
  const updateFaq = () => {
    axios.put(`${baseURL}/faqs/${editingFaq.id}`, editingFaq)
      .then(response => {
        setFaqs(faqs.map(faq => (faq.id === editingFaq.id ? response.data : faq)));
        setEditingFaq(null);
      })
      .catch(error => {
        console.error('Error updating FAQ:', error);
      });
  };

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="faq-container">
      <button className="back-button" onClick={goBack}>
        ←
      </button>
      <h2 className="faq-heading">FAQ Section</h2>

      {/* List of FAQs */}
      {faqs.length > 0 && <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <button className="delete-button" onClick={() => deleteFaq(faq.id)}>Delete</button>
            <button className="edit-button" onClick={() => setEditingFaq(faq)}>Edit</button>
          </div>
        ))}
      </div>}


      {/* Add New FAQ */}
      <div className="new-faq-container">
        <h3>Add New FAQ</h3>
        <input
          className="faq-input"
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
        />
        <input
          className="faq-input"
          type="text"
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
        />
        <button className="faq-button" onClick={createFaq}>Add FAQ</button>
      </div>

      {/* Edit FAQ */}
      {editingFaq && (
        <div className="edit-faq-container">
          <h3>Edit FAQ</h3>
          <input
            className="faq-input"
            type="text"
            placeholder="Question"
            value={editingFaq.question}
            onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
          />
          <input
            className="faq-input"
            type="text"
            placeholder="Answer"
            value={editingFaq.answer}
            onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
          />
          <button className="faq-button" onClick={updateFaq}>Update FAQ</button>
          <button className="faq-button" onClick={() => setEditingFaq(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default FaqPage;
