"use dom";

// import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

import "quill/dist/quill.snow.css"; // Add css for snow theme
import { useEffect } from "react";
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function Q() {
  //   const { quill, quillRef } = useQuill();

  //   useEffect(() => {
  //     if (quill) {
  //       quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
  //     }
  //   }, [quill]);

  return (
    <div style={{ width: 500, height: 300 }}>
      <h1>React Hook for Quill!</h1>
      {/* <div ref={quillRef} /> */}
    </div>
  );
}
