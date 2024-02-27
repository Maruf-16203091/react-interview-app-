import { Route, Routes } from "react-router-dom";
import SetQuestionsPage from "./pages/SetQuestionsPage";
import ViewQuestionsPage from "./pages/ViewQuestionsPage";
import EditQuestionsPage from "./pages/EditQuestionsPage";
import ViewGradePage from "./pages/ViewGradePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SetQuestionsPage />} />
        <Route path="/view" element={<ViewQuestionsPage />} />
        <Route path="/edit" element={<EditQuestionsPage />} />
        <Route path="/grade" element={<ViewGradePage />} />
      </Routes>
    </div>
  );
};

export default App;
