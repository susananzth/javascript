import React, { useEffect, useRef } from "react";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";
import sql from "highlight.js/lib/languages/sql";

// Registra los lenguajes una sola vez
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("php", php);
hljs.registerLanguage("sql", sql);

function Code({ language = "javascript", children }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      if (!codeRef.current.dataset.highlighted) {
        hljs.highlightElement(codeRef.current);
        codeRef.current.dataset.highlighted = "yes";
      }
    }
  }, [children]);

  return (
    <pre className="my-1">
      <code ref={codeRef} className={`rounded hljs language-${language}`}>
        {children}
      </code>
    </pre>
  );
}

export default Code;
