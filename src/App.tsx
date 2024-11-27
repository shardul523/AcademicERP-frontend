import { Route, Routes } from "react-router";
import LoginPage from "./components/application/LoginPage";
import TimeTablePage from "./components/application/TimeTablePage";
import ProtectedRoutes from "./components/application/ProtectedRoutes";
import CourseStudentsList from "./components/application/CourseStudentsList";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/timetable" element={<TimeTablePage />} />
        <Route
          path="/course/:courseCode/students"
          element={<CourseStudentsList />}
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
