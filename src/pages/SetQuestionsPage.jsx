// SetQuestionsPage.js
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const SetQuestionsPage = () => {
  const [keywords, setKeywords] = useState('');
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  // Load questions from local storage on initial render
  useEffect(() => {
    const savedQuestions = localStorage.getItem('questions');
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
  }, []);

  // Save questions to local storage whenever questions state changes
  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const handleSetQuestions = () => {
    const newQuestions = Array.from({ length: numQuestions }, (_, index) => ({
      id: index + 1,
      question: `Question ${index + 1}`,
      keywords: keywords.split(',').map(keyword => keyword.trim()),
      grades: { A: false, B: false, C: false }
    }));
    setQuestions(newQuestions);
  };

  return (
    <div>
      <h1>Set Questions</h1>
      <TextField
        label="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Number of Questions"
        type="number"
        value={numQuestions}
        onChange={(e) => setNumQuestions(parseInt(e.target.value))}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSetQuestions}>
        Set Questions
      </Button>
      <div>
        <h2>Preview Questions:</h2>
        <ul>
          {questions.map(({ id, question, keywords, grades }) => (
            <li key={id}>
              <strong>Question {id}:</strong> {question}<br />
              <small>Keywords: {keywords.join(', ')}</small><br />
              <small>Grades: {Object.keys(grades).filter(grade => grades[grade]).join(', ')}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SetQuestionsPage;
