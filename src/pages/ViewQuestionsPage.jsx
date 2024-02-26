// ViewQuestionsPage.js
import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';

const ViewQuestionsPage = () => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [keywords, setKeywords] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleGenerateQuestions = () => {
    // Filter questions based on keywords
    let filteredQuestions = questions;
    if (keywords.trim() !== '') {
      filteredQuestions = questions.filter(question =>
        question.keywords.some(keyword => keyword.toLowerCase().includes(keywords.toLowerCase()))
      );
    }

    // Randomly select questions
    const randomQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, numQuestions);
    setQuestions(randomQuestions);
  };

  const handleGradeChange = (questionId, grade) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId ? { ...question, grades: { ...question.grades, [grade]: !question.grades[grade] } } : question
      )
    );
  };

  const handleDone = () => {
    // Show SweetAlert or any other alert library
    alert('Done!');
  };

  return (
    <div>
      <h1>View Questions</h1>
      <TextField
        label="Number of Questions"
        type="number"
        value={numQuestions}
        onChange={(e) => setNumQuestions(parseInt(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Keyword"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleGenerateQuestions}>
        Generate Questions
      </Button>
      <div>
        <h2>Selected Questions:</h2>
        <ul>
          {questions.map(({ id, question, keywords, grades }) => (
            <li key={id}>
              <strong>Question {id}:</strong> {question}<br />
              <small>Keywords: {keywords.join(', ')}</small><br />
              <div>
                {Object.keys(grades).map(grade => (
                  <label key={grade}>
                    <Checkbox
                      checked={grades[grade]}
                      onChange={() => handleGradeChange(id, grade)}
                    />
                    {grade}
                  </label>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="contained" onClick={handleDone}>
        Done
      </Button>
    </div>
  );
};

export default ViewQuestionsPage;
