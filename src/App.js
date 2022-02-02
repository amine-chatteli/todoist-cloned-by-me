import HomePage from "./components/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import { LoginRegisterFormWithLoader } from "./components/Authentication/LoginRegisterFormWithLoader";
import { Todoist } from "./components/Todoist";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/todoist" element={<Todoist />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<LoginRegisterFormWithLoader LoginOrRegister="register" />}
        />
        <Route
          path="/login"
          element={<LoginRegisterFormWithLoader LoginOrRegister="login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
