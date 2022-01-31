import { useState } from "react";
import HomePage from "./components/HomePage";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, QuickAddTaskProvider } from "./context";
import { ActiveProjectProvider } from "./context/activeProjectContext";
import { useProjects } from "./hooks";
import { Routes, Route, Link } from "react-router-dom";
import { LoginRegisterForm } from "./components/Authentication/LoginRegisterForm";

import "./styles.css";

function App() {
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { projects, setProjects } = useProjects();
  const [activeProject, setActiveProject] = useState({
    id: "INBOX",
    name: "Inbox",
  });

  return (
    <div className="App">
      {/*  <QuickAddTaskProvider
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      >
        <ProjectsProvider projects={projects} setProjects={setProjects}>
          <ActiveProjectProvider
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          >
            <Header />
            <Content />
          </ActiveProjectProvider>
        </ProjectsProvider>
      </QuickAddTaskProvider> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<LoginRegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
