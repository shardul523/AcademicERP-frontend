import { Route, Routes } from "react-router";
import LoginPage from "./components/application/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
