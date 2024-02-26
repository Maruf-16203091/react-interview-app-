import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SetQuestionsPage from "./pages/SetQuestionsPage";
import ViewQuestionsPage from "./pages/ViewQuestionsPage";
import EditQuestionsPage from "./pages/EditQuestionsPage";

const App = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SetQuestionsPage />} />
        <Route path="/view" element={<ViewQuestionsPage />} />
        <Route path="/edit" element={<EditQuestionsPage />} />
      </Routes>
    </div>
  );
};

export default App;
