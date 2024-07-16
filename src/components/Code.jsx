import React, { useEffect } from "react";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";

function Code({ language = "javascript", children }) {
  switch (language) {
    case "php":
      hljs.registerLanguage(language, php);
      break;

    case "javascript":
    default:
      hljs.registerLanguage(language, javascript);
      break;
  }
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="my-1">
      <code className="rounded">{children}</code>
    </pre>
  );
}

export default Code;
