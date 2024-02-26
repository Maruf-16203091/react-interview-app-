import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const SetQuestionsPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    if (question.trim() !== "") {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { question: question.trim() },
      ]);
      setQuestion("");
    }
  };

  const handleSave = () => {
    // Logic to save the questions (if needed)
    console.log("Questions saved:", questions);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h4" style={{ color: "#3f51b5" }}>
        Set Questions
      </Typography>
      <TextField
        label="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        fullWidth
        margin="normal"
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        onClick={handleAddQuestion}
        style={{ backgroundColor: "#3f51b5", color: "white" }}
      >
        Add Question
      </Button>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6" style={{ color: "#009688" }}>
          Preview Questions:
        </Typography>
        <ul>
          {questions.map((q, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <TextField
                label={`Question ${index + 1}`}
                value={q.question}
                onChange={(e) => {
                  const updatedQuestions = [...questions];
                  updatedQuestions[index].question = e.target.value;
                  setQuestions(updatedQuestions);
                }}
                fullWidth
                margin="normal"
                style={{ marginBottom: "20px" }}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button
        variant="contained"
        onClick={handleSave}
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          float: "right",
          marginTop: "20px",
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default SetQuestionsPage;
