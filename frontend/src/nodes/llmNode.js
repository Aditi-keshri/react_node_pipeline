// llmNode.js
import BaseNode from "../components/BaseNode";

export default function LLMNode() {
  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <p>LLM processing</p>
    </BaseNode>
  );
}

