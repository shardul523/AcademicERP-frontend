import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./components/application/LoginPage";
import TimeTablePage from "./components/application/TimeTablePage";
import ProtectedRoutes from "./components/application/ProtectedRoutes";
import CourseStudentsList from "./components/application/CourseStudentsList";
import MainLayout from "./components/MainLayout";
import DashboardPage from "./components/application/DashboardPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to={"/dashboard"} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/timetable" element={<TimeTablePage />} />
          <Route
            path="/courses/:courseCode/students"
            element={<CourseStudentsList />}
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
}

export default App;
