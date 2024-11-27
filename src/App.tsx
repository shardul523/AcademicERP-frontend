import { Route, Routes } from "react-router";
import LoginPage from "./components/application/LoginPage";
import TimeTablePage from "./components/application/TimeTablePage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/timetable" element={<TimeTablePage />} />
    </Routes>
  );
}

export default App;
