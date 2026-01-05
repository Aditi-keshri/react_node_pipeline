export function submitPipeline(nodes, edges) {
  fetch("http://localhost:8000/pipelines/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nodes, edges })
  })
    .then(res => res.json())
    .then(data => {
      alert(
        `Pipeline Summary
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`
      );
    });
}
