import { marked } from "marked";
import { useEffect, useRef, useState } from "react";

export default function Editor({ setText }) {
  marked.setOptions({
    breaks: true,
  });
  const [defaultMarkup, setDefaultMarkup] = useState("");
  const markDownRef = useRef(null);
  function convertToMarkup(value) {
    const markup = marked.parse(value);
    setText(markup);
  }
  async function loadDefaultMarkup() {
    const res = await fetch("./assets/markup.txt");
    const text = await res.text();
    setDefaultMarkup(text);
    convertToMarkup(text);
  }

  useEffect(() => {
    loadDefaultMarkup();
  }, []);

  return (
    <div className="col">
      <header className="header">
        <h2>Editor</h2>
      </header>
      <textarea
        ref={markDownRef}
        onChange={(e) => {
          convertToMarkup(e.target.value);
          setDefaultMarkup(e.target.value);
        }}
        name="editor"
        id="editor"
        value={defaultMarkup}
      ></textarea>
    </div>
  );
}
