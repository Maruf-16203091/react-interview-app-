// EditQuestionsPage.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EditQuestionsPage = ({ questions, setQuestions }) => {
  const [editedQuestions, setEditedQuestions] = useState([...questions]);

  const handleQuestionChange = (index, newValue) => {
    setEditedQuestions(prevQuestions =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, question: newValue } : question
      )
    );
  };

  const handleKeywordsChange = (index, newValue) => {
    setEditedQuestions(prevQuestions =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, keywords: newValue.split(',').map(keyword => keyword.trim()) } : question
      )
    );
  };

  const handleSaveChanges = () => {
    setQuestions([...editedQuestions]);
    alert('Changes saved!');
  };

  return (
    <div>
      <h1>Edit Questions</h1>
      {editedQuestions.map((question, index) => (
        <div key={index}>
          <TextField
            label={`Question ${index + 1}`}
            value={question.question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Keywords"
            value={question.keywords.join(', ')}
            onChange={(e) => handleKeywordsChange(index, e.target.value)}
            fullWidth
            margin="normal"
          />
        </div>
      ))}
      <Button variant="contained" onClick={handleSaveChanges}>
        Save Changes
      </Button>
    </div>
  );
};

export default EditQuestionsPage;
