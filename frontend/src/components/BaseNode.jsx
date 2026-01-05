import "../styles/node.css";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children
}) {
  return (
    <div className="node">
      <div className="node-header">{title}</div>

      <div className="node-body">{children}</div>

      <div className="handles left">
        {inputs.map((h, i) => (
          <div key={i} className="handle left-handle">
            {h}
          </div>
        ))}
      </div>

      <div className="handles right">
        {outputs.map((h, i) => (
          <div key={i} className="handle right-handle">
            {h}
          </div>
        ))}
      </div>
    </div>
  );
}
