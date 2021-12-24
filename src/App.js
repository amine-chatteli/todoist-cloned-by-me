import { useState } from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import "./styles.css";

function App() {
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <div className="App">
      <Header
        showQuickAddTask={showQuickAddTask}
        onSetShowQuickAddTask={setShowQuickAddTask}
      />
      <Content
        showQuickAddTask={showQuickAddTask}
        onSetShowQuickAddTask={setShowQuickAddTask}
      />
    </div>
  );
}

export default App;
