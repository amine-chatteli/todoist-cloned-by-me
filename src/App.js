import { useState } from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { QuickAddTaskProvider } from "./context";

import "./styles.css";

function App() {
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <div className="App">
      <QuickAddTaskProvider
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      >
        <Header />
        <Content />
      </QuickAddTaskProvider>
    </div>
  );
}

export default App;
