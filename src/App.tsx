import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import TaskQuest from "./pages/works/TaskQuest";
import FitBuddy from "./pages/works/FitBuddy";
import ColorGame from "./pages/works/ColorGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />

        <Route path="/works/task-quest" element={<TaskQuest />} />
        <Route path="/works/fitbuddy" element={<FitBuddy />} />
        <Route path="/works/color-game" element={<ColorGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;