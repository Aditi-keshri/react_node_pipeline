import { useState } from "react";
import BaseNode from "../components/BaseNode";

export default function TextNode() {
  const [text, setText] = useState("");

  const matches = text.match(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g);
  const variables = matches
    ? [...new Set(matches.map(v => v.replace(/[{}]/g, "").trim()))]
    : [];

  return (
    <BaseNode title="Text" inputs={variables} outputs={["text"]}>
     <textarea
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Type here..."
  style={{
    width: "100%",
    minHeight: 70,
    maxHeight: 200,
    resize: "none",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    padding: "10px",
    outline: "none",
    fontSize: "13px",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.6)"
  }}
/>



    </BaseNode>
  );
}
