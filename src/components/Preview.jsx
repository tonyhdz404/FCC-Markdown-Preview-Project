import { useEffect, useRef } from "react";

export default function Preview({ text }) {
  const htmlRef = useRef(null);
  useEffect(() => {
    // console.log(text);
    htmlRef.current.innerHTML = text;
  }, [text]);
  return (
    <div className="col">
      <header className="header">
        <h2>Preview</h2>
      </header>
      <article ref={htmlRef} id="preview"></article>
    </div>
  );
}
