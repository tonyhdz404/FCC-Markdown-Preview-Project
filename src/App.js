import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
function App() {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <header className="header header--1">
        <h1>FCC Markdown Challange</h1>
      </header>
      <div className="row">
        <Editor text={text} setText={setText} />
        <Preview text={text} />
      </div>
    </div>
  );
}

export default App;
