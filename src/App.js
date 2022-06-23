import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
function App() {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <Editor text={text} setText={setText} />
      <Preview text={text} />
    </div>
  );
}

export default App;
