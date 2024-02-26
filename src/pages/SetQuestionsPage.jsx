// SetQuestionsPage.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const SetQuestionsPage = () => {
  const [keywords, setKeywords] = useState('');
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    if (question.trim() !== '') {
      setQuestions(prevQuestions => [...prevQuestions, { question: question.trim(), keywords: keywords.split(',').map(keyword => keyword.trim()) }]);
      setQuestion('');
      setKeywords('');
    }
  };

  return (
    <div>
      <h1>Set Questions</h1>
      <TextField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAddQuestion}>
        Add Question
      </Button>
      <div>
        <Typography variant="h6">Preview Questions:</Typography>
        <ul>
          {questions.map((q, index) => (
            <li key={index}>
              <strong>Question {index + 1}:</strong> {q.question}<br />
              <small>Keywords: {q.keywords.join(', ')}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SetQuestionsPage;
