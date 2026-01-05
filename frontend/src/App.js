import InputNode from "./nodes/inputNode";
import TextNode from "./nodes/textNode";
import TimerNode from "./nodes/TimerNode";
import OutputNode from "./nodes/outputNode";
import { submitPipeline } from "./submit";

function App() {
  const handleSubmit = () => {
    const nodes = [
      { id: "1" },
      { id: "2" },
      { id: "3" }
    ];

    const edges = [
      { source: "1", target: "2" },
      { source: "2", target: "3" }
    ];

    submitPipeline(nodes, edges);
  };

  return (
    <div style={{ padding: 40 }}>
      {/* EDITOR CANVAS */}
      <div
        className="editor-grid"
        style={{
          padding: 40,
    borderRadius: 20,
    backgroundColor: "#0b1220",
    boxShadow: `
  0 40px 80px rgba(0,0,0,0.6),
  inset 0 0 0 1px rgba(255,255,255,0.05)
`,

          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          alignItems: "flex-start",
          maxWidth: 1400,
          margin: "0 auto"
        }}
      >
        <InputNode />
        <TextNode />
        <TimerNode />
        <OutputNode />
      </div>

      {/* SUBMIT BUTTON */}
      <div style={{ textAlign: "center" }}>
        <button
  onClick={handleSubmit}
  style={{
    marginTop: 30,
    padding: "12px 36px",
    background: "#4f46e5",
    color: "#ffffff",
    border: "none",
    borderRadius: 12,
    fontSize: 14,
    cursor: "pointer",
    boxShadow:
      "0 6px 18px rgba(79,70,229,0.7)",
    transition: "box-shadow 0.2s ease"
  }}
  onMouseEnter={e =>
    e.currentTarget.style.boxShadow =
      "0 8px 28px rgba(79,70,229,0.9)"
  }
  onMouseLeave={e =>
    e.currentTarget.style.boxShadow =
      "0 6px 18px rgba(79,70,229,0.7)"
  }
>

          Submit Pipeline
        </button>
      </div>
    </div>
  );
}

export default App;
