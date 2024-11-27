import { Route, Routes } from "react-router";
import LoginPage from "./components/application/LoginPage";
import TimeTablePage from "./components/application/TimeTablePage";
import ProtectedRoutes from "./components/application/ProtectedRoutes";
import CourseStudentsList from "./components/application/CourseStudentsList";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoutes />}>
          <Route path="/timetable" element={<TimeTablePage />} />
          <Route
            path="/course/:courseCode/students"
            element={<CourseStudentsList />}
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
