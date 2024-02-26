import React, { useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";

const ViewQuestionsPage = ({ questions, setQuestions }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [numQuestionsNeeded, setNumQuestionsNeeded] = useState(0);

  // Sample array of dummy questions
  const dummyQuestions = [
    {
      text: "What is React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is JSX?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the virtual DOM?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is state in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What are props in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What are hooks in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of useEffect?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the difference between useState and useReducer?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is component lifecycle in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "How do you create a controlled component in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of key prop in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of refs in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is a higher-order component (HOC) in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the Context API in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is error boundary in React?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of useCallback hook?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of useMemo hook?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of useRef hook?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of useReducer hook?",
      grades: { A: false, B: false, C: false },
    },
    {
      text: "What is the purpose of useContext hook?",
      grades: { A: false, B: false, C: false },
    },
    // Add more dummy questions as needed
  ];

  const handleGenerateQuestions = () => {
    // Shuffle the existing questions
    const shuffledQuestions = shuffleArray(dummyQuestions);
    // Get the selected number of questions
    const number = parseInt(numQuestionsNeeded);
    // Select the requested number of questions
    const selected = shuffledQuestions.slice(0, number);
    setSelectedQuestions(selected);
  };

  const handleSave = () => {
    // Logic to save the selected questions (if needed)
    console.log("Questions saved:", selectedQuestions);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleGradeChange = (questionIndex, grade) => {
    // Update the grade of the question at the specified index
    const updatedQuestions = [...selectedQuestions];
    updatedQuestions[questionIndex].grades[grade] =
      !updatedQuestions[questionIndex].grades[grade];
    // Set the updated selected questions state
    setSelectedQuestions(updatedQuestions);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "20px",
          margin: "20px",
          maxWidth: "1000px",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 style={{ color: "#3f51b5" }}>Interview Questions</h1>
        <TextField
          label="How many questions do you need?"
          type="number"
          value={numQuestionsNeeded}
          onChange={(e) => setNumQuestionsNeeded(e.target.value)}
          fullWidth
          margin="normal"
          sx={{ width: "1000px" }}
        />

        <div>
          {selectedQuestions.map((question, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3 style={{ color: "#009688" }}>Question {index + 1}</h3>
              <p style={{ color: "#212121" }}>{question.text}</p>
              <div>
                <Checkbox
                  color="primary"
                  checked={question.grades.A}
                  onChange={() => handleGradeChange(index, "A")}
                />
                <span style={{ color: "#f44336", fontWeight: "bold" }}>
                  Grade A
                </span>
                <Checkbox
                  color="primary"
                  checked={question.grades.B}
                  onChange={() => handleGradeChange(index, "B")}
                />
                <span style={{ color: "#ff9800", fontWeight: "bold" }}>
                  Grade B
                </span>
                <Checkbox
                  color="primary"
                  checked={question.grades.C}
                  onChange={() => handleGradeChange(index, "C")}
                />
                <span style={{ color: "#2196f3", fontWeight: "bold" }}>
                  Grade C
                </span>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="contained"
          onClick={handleSave}
          style={{
            backgroundColor: "#86c7f0",
            color: "black",
            marginBottom: "20px",
          }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          onClick={handleGenerateQuestions}
          style={{
            backgroundColor: "#05faa8",
            color: "black",
            float: "right",
            marginBottom: "20px",
          }}
        >
          Generate New Questions
        </Button>
      </div>
    </div>
  );
};

export default ViewQuestionsPage;
